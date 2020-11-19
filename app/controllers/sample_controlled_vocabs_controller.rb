class SampleControlledVocabsController < ApplicationController

  respond_to :html, :json

  include Seek::IndexPager
  include Seek::AssetsCommon

  before_action :samples_enabled?
  before_action :login_required, except: [:show, :index]
  before_action :is_user_admin_auth, only: [:destroy, :update]
  before_action :find_and_authorize_requested_item, except: [:index, :new, :create]
  before_action :find_assets, only: :index
  before_action :auth_to_create, only: [:new, :create]

  api_actions :show, :create, :update, :destroy


  def show
    @sample_controlled_vocab = SampleControlledVocab.find(params[:id])
    respond_to do |format|
      format.html
      format.json {render json: @sample_controlled_vocab, include: [params[:include]]}
    end
  end

  def new
    @sample_controlled_vocab = SampleControlledVocab.new
    @sample_controlled_vocab.sample_controlled_vocab_terms << SampleControlledVocabTerm.new
    respond_with(@sample_controlled_vocab)
  end

  def edit
    respond_with(@sample_controlled_vocab)
  end

  def create
    @sample_controlled_vocab = SampleControlledVocab.new(cv_params)
    respond_to do |format|
      if @sample_controlled_vocab.save
        Rails.logger.info("Sample Controlled Vocab Saved")
        format.html { redirect_to @sample_controlled_vocab, notice: 'The sample controlled vocabulary was successfully created.' }
        format.json { render json: @sample_controlled_vocab, status: :created, location: @sample_controlled_vocab, include: [params[:include]]}
        format.js { render layout: false, content_type: 'text/javascript' }
      else
        Rails.logger.info("Sample Controlled Vocab failed to save")
        format.html { render action: 'new' }
        format.json { render json: json_api_errors(@sample_controlled_vocab), status: :unprocessable_entity}
        format.js { render layout: false, content_type: 'text/javascript' }
      end
    end
  end

  def update
    @sample_controlled_vocab.update_attributes(cv_params)
    respond_to do |format|
      if @sample_controlled_vocab.save
        format.html { redirect_to @sample_controlled_vocab, notice: 'The sample controlled vocabulary was successfully updated.' }
        format.json {render json: @sample_controlled_vocab, include: [params[:include]]}
      else
        format.html { render action: 'edit', status: :unprocessable_entity }
        format.json { render json: json_api_errors(@sample_controlled_vocab), status: :unprocessable_entity}
      end
    end
  end

  def destroy
    respond_to do |format|
      if @sample_controlled_vocab.can_delete? && @sample_controlled_vocab.destroy
        format.html { redirect_to @sample_controlled_vocab,location: sample_controlled_vocabs_path, notice: 'The sample controlled vocabulary was successfully deleted.' }
        format.json {render json: @sample_controlled_vocab, include: [params[:include]]}
      else
        format.html { redirect_to @sample_controlled_vocab, location: sample_types_path, notice: 'It was not possible to delete the sample controlled vocabulary.' }
        format.json { render json: json_api_errors(@sample_controlled_vocab), status: :unprocessable_entity}
      end
    end
  end

  def typeahead
    scv = SampleControlledVocab.find(params[:scv_id])
    results = scv.sample_controlled_vocab_terms.where("LOWER(label) like :query OR LOWER(iri) LIKE :query",
                                                      query: "%#{params[:query].downcase}%").limit(params[:limit] || 100)
    items = results.map do |term|
      { id: term.label,
        name: term.label,
        iri: term.iri }
    end

    respond_to do |format|
      format.json { render json: items.to_json }
    end
  end


  private

  def cv_params
    params.require(:sample_controlled_vocab).permit(:title, :description, :group, :source_ontology, :ols_root_term_uri,
                                                    :required, :short_name,
                                                    { repository_standard_attributes: [:title, :url, :group_tag, :description, :repo_type]},
                                                    { sample_controlled_vocab_terms_attributes: [:id, :_destroy, :label,
                                                      :iri, :parent_iri]})
  end

end

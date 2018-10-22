class TextValue < ApplicationRecord

  TAG_TYPES=["tag","expertise","tool","sample_type_tags"]

  def self.all_tags attributes=TAG_TYPES
    self.with_attribute_names(attributes).compact
  end

  def tag_count
    annotation_count TAG_TYPES
  end
end

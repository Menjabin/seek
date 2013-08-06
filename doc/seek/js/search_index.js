var search_data = {"index":{"searchIndex":["seek","rdf","rdffilestorage","rdfgeneration","rdfrepository","rdfrepositorystorage","virtuosorepository","config","additional_triples()","configured?()","create_rdf_generation_job()","delete()","delete_rdf_file()","dependent_items()","describe_type()","generate_from_csv_definitions()","generate_triples()","get_configuration()","get_configuration()","get_query_object()","get_query_object()","get_repository_object()","get_repository_object()","handle_rightfield_contents()","included()","insert()","instance()","ns_prefixes()","private_rdf_storage_path()","public_rdf_storage_path()","query()","rdf_repository_configured?()","rdf_resource()","rdf_storage_filename()","rdf_storage_path()","refresh_dependents_rdf()","refresh_rdf()","related_items_from_sparql()","remove_rdf()","remove_rdf()","remove_rdf_from_repository()","save_rdf_file()","select()","send_rdf()","send_rdf_to_repository()","to_rdf()","to_rdf_graph()","update_rdf()","update_repository_rdf()","uris_of_items_related_to()","administration","backups","credits","earlier-upgrades","install","install-production","other-distributions","readme","setting-up-virtuoso","upgrading","upgrading-to-0-18"],"longSearchIndex":["seek","seek::rdf","seek::rdf::rdffilestorage","seek::rdf::rdfgeneration","seek::rdf::rdfrepository","seek::rdf::rdfrepositorystorage","seek::rdf::virtuosorepository","seek::rdf::virtuosorepository::config","seek::rdf::rdfgeneration#additional_triples()","seek::rdf::rdfrepository#configured?()","seek::rdf::rdfgeneration#create_rdf_generation_job()","seek::rdf::rdfrepository#delete()","seek::rdf::rdffilestorage#delete_rdf_file()","seek::rdf::rdfgeneration#dependent_items()","seek::rdf::rdfgeneration#describe_type()","seek::rdf::rdfgeneration#generate_from_csv_definitions()","seek::rdf::rdfgeneration#generate_triples()","seek::rdf::rdfrepository#get_configuration()","seek::rdf::virtuosorepository#get_configuration()","seek::rdf::rdfrepository#get_query_object()","seek::rdf::virtuosorepository#get_query_object()","seek::rdf::rdfrepository#get_repository_object()","seek::rdf::virtuosorepository#get_repository_object()","seek::rdf::rdfgeneration#handle_rightfield_contents()","seek::rdf::rdfgeneration::included()","seek::rdf::rdfrepository#insert()","seek::rdf::rdfrepository::instance()","seek::rdf::rdfgeneration#ns_prefixes()","seek::rdf::rdffilestorage#private_rdf_storage_path()","seek::rdf::rdffilestorage#public_rdf_storage_path()","seek::rdf::rdfrepository#query()","seek::rdf::rdfrepositorystorage#rdf_repository_configured?()","seek::rdf::rdfgeneration#rdf_resource()","seek::rdf::rdffilestorage#rdf_storage_filename()","seek::rdf::rdffilestorage#rdf_storage_path()","seek::rdf::rdfgeneration#refresh_dependents_rdf()","seek::rdf::rdfgeneration#refresh_rdf()","seek::rdf::rdfrepositorystorage#related_items_from_sparql()","seek::rdf::rdfgeneration#remove_rdf()","seek::rdf::rdfrepository#remove_rdf()","seek::rdf::rdfrepositorystorage#remove_rdf_from_repository()","seek::rdf::rdffilestorage#save_rdf_file()","seek::rdf::rdfrepository#select()","seek::rdf::rdfrepository#send_rdf()","seek::rdf::rdfrepositorystorage#send_rdf_to_repository()","seek::rdf::rdfgeneration#to_rdf()","seek::rdf::rdfgeneration#to_rdf_graph()","seek::rdf::rdfrepository#update_rdf()","seek::rdf::rdfrepositorystorage#update_repository_rdf()","seek::rdf::rdfrepository#uris_of_items_related_to()","","","","","","","","","","",""],"info":[["Seek","","Seek.html","",""],["Seek::Rdf","","Seek/Rdf.html","",""],["Seek::Rdf::RdfFileStorage","","Seek/Rdf/RdfFileStorage.html","","<p>provides methods related to storing Rdf, in particular in files, but also\nincludes RdfRepositoryStorage …\n"],["Seek::Rdf::RdfGeneration","","Seek/Rdf/RdfGeneration.html","",""],["Seek::Rdf::RdfRepository","","Seek/Rdf/RdfRepository.html","","<p>This is the base class of all rdf repositories, and can be considered an\nAbstract class. A subclass specialization …\n"],["Seek::Rdf::RdfRepositoryStorage","","Seek/Rdf/RdfRepositoryStorage.html","","<p>Module that works in conjuction with RdfStorage to support maintaning the\nRDF in a triple store as well …\n"],["Seek::Rdf::VirtuosoRepository","","Seek/Rdf/VirtuosoRepository.html","","<p>A specialization of RdfRepository, to support the Open Virtuoso Quad Store.\n"],["Seek::Rdf::VirtuosoRepository::Config","","Seek/Rdf/VirtuosoRepository/Config.html","",""],["additional_triples","Seek::Rdf::RdfGeneration","Seek/Rdf/RdfGeneration.html#method-i-additional_triples","(rdf_graph)","<p>extra steps that cannot be easily handled by the csv template\n"],["configured?","Seek::Rdf::RdfRepository","Seek/Rdf/RdfRepository.html#method-i-configured-3F","()",""],["create_rdf_generation_job","Seek::Rdf::RdfGeneration","Seek/Rdf/RdfGeneration.html#method-i-create_rdf_generation_job","(force=false,refresh_dependents=true)",""],["delete","Seek::Rdf::RdfRepository","Seek/Rdf/RdfRepository.html#method-i-delete","(*args)","<p>execute a deletion query, which delegates to Rdf::Repository#query\n"],["delete_rdf_file","Seek::Rdf::RdfFileStorage","Seek/Rdf/RdfFileStorage.html#method-i-delete_rdf_file","()","<p>deletes any files that contain the rdf for this item, either from public or\nprivate subdirectories.\n"],["dependent_items","Seek::Rdf::RdfGeneration","Seek/Rdf/RdfGeneration.html#method-i-dependent_items","()",""],["describe_type","Seek::Rdf::RdfGeneration","Seek/Rdf/RdfGeneration.html#method-i-describe_type","(rdf_graph)",""],["generate_from_csv_definitions","Seek::Rdf::RdfGeneration","Seek/Rdf/RdfGeneration.html#method-i-generate_from_csv_definitions","(rdf_graph)",""],["generate_triples","Seek::Rdf::RdfGeneration","Seek/Rdf/RdfGeneration.html#method-i-generate_triples","(subject, method, property,uri_or_literal,transformation,collection_transform,rdf_graph)",""],["get_configuration","Seek::Rdf::RdfRepository","Seek/Rdf/RdfRepository.html#method-i-get_configuration","()","<p>Abstract methods\n"],["get_configuration","Seek::Rdf::VirtuosoRepository","Seek/Rdf/VirtuosoRepository.html#method-i-get_configuration","()",""],["get_query_object","Seek::Rdf::RdfRepository","Seek/Rdf/RdfRepository.html#method-i-get_query_object","()",""],["get_query_object","Seek::Rdf::VirtuosoRepository","Seek/Rdf/VirtuosoRepository.html#method-i-get_query_object","()",""],["get_repository_object","Seek::Rdf::RdfRepository","Seek/Rdf/RdfRepository.html#method-i-get_repository_object","()",""],["get_repository_object","Seek::Rdf::VirtuosoRepository","Seek/Rdf/VirtuosoRepository.html#method-i-get_repository_object","()",""],["handle_rightfield_contents","Seek::Rdf::RdfGeneration","Seek/Rdf/RdfGeneration.html#method-i-handle_rightfield_contents","(object)",""],["included","Seek::Rdf::RdfGeneration","Seek/Rdf/RdfGeneration.html#method-c-included","(base)",""],["insert","Seek::Rdf::RdfRepository","Seek/Rdf/RdfRepository.html#method-i-insert","(*args)","<p>execute a insert query, which delegates to Rdf::Repository#query\n"],["instance","Seek::Rdf::RdfRepository","Seek/Rdf/RdfRepository.html#method-c-instance","()","<p>provides a singleton instance of the configured repository\n"],["ns_prefixes","Seek::Rdf::RdfGeneration","Seek/Rdf/RdfGeneration.html#method-i-ns_prefixes","()","<p>the hash of namespace prefixes to pass to the RDF::Writer when generating\nthe RDF\n"],["private_rdf_storage_path","Seek::Rdf::RdfFileStorage","Seek/Rdf/RdfFileStorage.html#method-i-private_rdf_storage_path","()","<p>returns the path that rdf for non publicly visible assets are stored.\n"],["public_rdf_storage_path","Seek::Rdf::RdfFileStorage","Seek/Rdf/RdfFileStorage.html#method-i-public_rdf_storage_path","()","<p>returns the path that rdf for publicly visible assets are stored.\n"],["query","Seek::Rdf::RdfRepository","Seek/Rdf/RdfRepository.html#method-i-query","()","<p>an RDF::Query that can be used to create queries to query the repository\n"],["rdf_repository_configured?","Seek::Rdf::RdfRepositoryStorage","Seek/Rdf/RdfRepositoryStorage.html#method-i-rdf_repository_configured-3F","()","<p>checks that a repository is available and that is has been configured for\nthe current Rails.env\n"],["rdf_resource","Seek::Rdf::RdfGeneration","Seek/Rdf/RdfGeneration.html#method-i-rdf_resource","()",""],["rdf_storage_filename","Seek::Rdf::RdfFileStorage","Seek/Rdf/RdfFileStorage.html#method-i-rdf_storage_filename","()","<p>the generated filename for this asset, based upon its type, the Rails.env,\nand its id\n"],["rdf_storage_path","Seek::Rdf::RdfFileStorage","Seek/Rdf/RdfFileStorage.html#method-i-rdf_storage_path","(inner_dir=nil?)","<p>returns the path that rdf for this item will be stored, according to its\nvisibility\n"],["refresh_dependents_rdf","Seek::Rdf::RdfGeneration","Seek/Rdf/RdfGeneration.html#method-i-refresh_dependents_rdf","()",""],["refresh_rdf","Seek::Rdf::RdfGeneration","Seek/Rdf/RdfGeneration.html#method-i-refresh_rdf","()",""],["related_items_from_sparql","Seek::Rdf::RdfRepositoryStorage","Seek/Rdf/RdfRepositoryStorage.html#method-i-related_items_from_sparql","()","<p>returns any active-record items that are linked to this item, as determined\nby querying the repository. …\n"],["remove_rdf","Seek::Rdf::RdfGeneration","Seek/Rdf/RdfGeneration.html#method-i-remove_rdf","()",""],["remove_rdf","Seek::Rdf::RdfRepository","Seek/Rdf/RdfRepository.html#method-i-remove_rdf","(item,graphs=[get_configuration.public_graph,get_configuration.private_graph].compact,delete_file = true)","<p>remove the rdf related to item from the repository, and delete the rdf file\n"],["remove_rdf_from_repository","Seek::Rdf::RdfRepositoryStorage","Seek/Rdf/RdfRepositoryStorage.html#method-i-remove_rdf_from_repository","()","<p>will remove the rdf triples that were previously sent the the repository\nand stored in the rdf file for …\n"],["save_rdf_file","Seek::Rdf::RdfFileStorage","Seek/Rdf/RdfFileStorage.html#method-i-save_rdf_file","()","<p>saves the RDF to a file according to the configured filestore, in a\ndirectory rdf/. Filenames are based …\n"],["select","Seek::Rdf::RdfRepository","Seek/Rdf/RdfRepository.html#method-i-select","(*args)","<p>execute a selection query, which delegates to Rdf::Repository#query\n"],["send_rdf","Seek::Rdf::RdfRepository","Seek/Rdf/RdfRepository.html#method-i-send_rdf","(item,graphs=rdf_graph_uris(item), save_file = true)","<p>send the rdf related to item to the repository, and update the rdf file\n"],["send_rdf_to_repository","Seek::Rdf::RdfRepositoryStorage","Seek/Rdf/RdfRepositoryStorage.html#method-i-send_rdf_to_repository","()","<p>Will send the rdf related to self to the configured repository. This will\nnot remove previously existing …\n"],["to_rdf","Seek::Rdf::RdfGeneration","Seek/Rdf/RdfGeneration.html#method-i-to_rdf","()",""],["to_rdf_graph","Seek::Rdf::RdfGeneration","Seek/Rdf/RdfGeneration.html#method-i-to_rdf_graph","()",""],["update_rdf","Seek::Rdf::RdfRepository","Seek/Rdf/RdfRepository.html#method-i-update_rdf","(item)","<p>updates the rdf in the repository and updates the rdf file. This is more\nefficient that calling remove_rdf …\n"],["update_repository_rdf","Seek::Rdf::RdfRepositoryStorage","Seek/Rdf/RdfRepositoryStorage.html#method-i-update_repository_rdf","()","<p>updates the repository with the changes for self, consolidating the\ndifferences between now and when …\n"],["uris_of_items_related_to","Seek::Rdf::RdfRepository","Seek/Rdf/RdfRepository.html#method-i-uris_of_items_related_to","(item)","<p>provides the URI’s of any items related to the item - discovered by\nquerying the triple store to find …\n"],["ADMINISTRATION","","doc/ADMINISTRATION.html","","<p>Administration of SEEK\n<p>Configuring Email\n<p>By default email is disabled, but if you are able to you can configure …\n"],["BACKUPS","","doc/BACKUPS.html","","<p>Backing Up\n<p>Backing up the database\n<p>You can backup the database using mysqldump using the following syntax. …\n"],["CREDITS","","doc/CREDITS.html","","<p>Credits\n<p>Related Projects\n<p>Virtual Liver Network - www.virtual-liver.de/\n"],["EARLIER-UPGRADES","","doc/EARLIER-UPGRADES.html","","<p>Upgrades to 0.16.x and earlier\n<p>Steps to upgrade from 0.15.x to 0.16.x\n<p>First there are additional dependencies …\n"],["INSTALL","","doc/INSTALL.html","","<p>Installing SEEK\n<p>Introduction\n<p>If you have installed SEEK, please take a moment to fill out our very\nshort,optional …\n"],["INSTALL-PRODUCTION","","doc/INSTALL-PRODUCTION.html","","<p>Installing SEEK in a production environment\n<p>This page contains some extra notes about setting up SEEK …\n"],["OTHER-DISTRIBUTIONS","","doc/OTHER-DISTRIBUTIONS.html","","<p>Installing SEEK for other Linux distributions\n<p>Our main Install Guide is based upon the Ubuntu 12.04 ( …\n"],["README","","doc/README.html","","<p>SYSMO-SEEK\n<p>Please visit the SEEK for more information about SEEK and Sysmo-DB in\ngeneral.\n<p>Installation …\n"],["SETTING-UP-VIRTUOSO","","doc/SETTING-UP-VIRTUOSO.html","","<p>Configuring SEEK for Virtuoso\n<p>It is possible to configure SEEK to automatically send RDF triples to a …\n"],["UPGRADING","","doc/UPGRADING.html","","<p>Upgrading SEEK\n<p>If you have an existing SEEK installation, and you haven’t done so already,\nplease take …\n"],["UPGRADING-TO-0-18","","doc/UPGRADING-TO-0-18.html","","<p>Upgrading to SEEK 0.18\n<p>Backing up\n<p>We always recommend you backup before doing an upgrade, but in this case …\n"]]}}
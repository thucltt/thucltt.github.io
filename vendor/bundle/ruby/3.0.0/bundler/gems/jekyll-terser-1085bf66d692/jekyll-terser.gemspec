# -*- encoding: utf-8 -*-
# stub: jekyll-terser 0.2.3 ruby lib

Gem::Specification.new do |s|
  s.name = "jekyll-terser".freeze
  s.version = "0.2.3"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["Roberto Beltran".freeze]
  s.date = "2026-06-01"
  s.description = "Minify, Uglify and Mangle javascript with Terser".freeze
  s.email = ["contact@robertobeltran.codes".freeze]
  s.files = [".gitignore".freeze, "Gemfile".freeze, "LICENSE".freeze, "Rakefile".freeze, "jekyll-terser.gemspec".freeze, "lib/jekyll-terser.rb".freeze, "lib/jekyll-terser/version.rb".freeze, "readme.md".freeze]
  s.homepage = "https://github.com/RobertoJBeltran/jekyll-terser".freeze
  s.rubygems_version = "3.3.5".freeze
  s.summary = "Terser for Jekyll".freeze

  s.installed_by_version = "3.3.5" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4
  end

  if s.respond_to? :add_runtime_dependency then
    s.add_runtime_dependency(%q<jekyll>.freeze, [">= 0.10.0"])
    s.add_runtime_dependency(%q<terser>.freeze, [">= 1.0.0"])
  else
    s.add_dependency(%q<jekyll>.freeze, [">= 0.10.0"])
    s.add_dependency(%q<terser>.freeze, [">= 1.0.0"])
  end
end

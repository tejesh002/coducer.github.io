task :default => [:categories,:category_cloud]

desc 'Generate categories cloud'
task :category_cloud do
  puts "Generating category cloud..."
  require 'rubygems'
  require 'jekyll'
  include Jekyll::Filters
  
  options = Jekyll.configuration({})
  site = Jekyll::Site.new(options)
  site.read_posts('')
  html = ''
  html << <<-HTML
<div style="width:300px;float:left;">
  <div style="background: #F6F6F6;border: 1px solid #DDD;color: #777;padding: 6px 6px;height:20px;margin-left:10px; ">
    <h4 style="font-size: 1.5em;">
      <span style="color: #357;text-decoration:none">Categories</span>
    </h4>
  </div>

HTML
  site.categories.sort.each do |category, posts|
    html << <<-HTML
  <div style="border: 1px solid #DDD;color: #777;padding: 6px 6px;height:20px;margin-left:10px; ">
    <h3 style="font-size: 1.25em;width:170px;float:left;">
      <a href="/categories/#{category}.html" style="color: #357;text-decoration:none">#{category.capitalize}</a>
    </h3>
    <h3 style="font-size: 1.25em;width:50px;float:left;">
      X
    </h3>
    <h3 style="font-size: 1.25em;width:50px;float:left;">
      #{posts.size}
    </h3>
  </div>
HTML
  end
  html << "</div>"
  File.open("_includes/category.html", 'w+') do |file|
    file.puts html
  end
    
end

desc 'Generate categories page'
task :categories do
  puts "Generating categorys..."
  require 'rubygems'
  require 'jekyll'
  include Jekyll::Filters
  
  options = Jekyll.configuration({})
  site = Jekyll::Site.new(options)
  site.read_posts('')
  site.categories.sort.each do |category, posts|
    html = ''
    html << <<-HTML
---
layout: archive
title: Category::#{category}
---
HTML
    
    posts.each do |post|
      post_data = post.to_liquid
      html << <<-HTML
  <div class="post" style="clear:both;margin-top:10px;">
    <div style="background: none repeat scroll 0 0 #F5F5F5;border-bottom: 1px solid #C5C5C5;border-right: 1px solid #CFCFCF;float: left;margin-right: 12px;padding: 2px 0 5px;text-align: center;width: 46px;">
      <div style="font: 1.6em Georgia,serif;">#{post_data['date'].strftime("%d")}</div>
      <div>#{post_data['date'].strftime("%b")}</div>
    </div>
    <div style="padding-top: 4px;">
      <h3 style="font-size: 1.5em;">
        <a href="#{post_data['url']}" style="color: #357;text-decoration:none">#{post_data['title']}</a>
      </h3>
      <div style="margin:-5px;">
        #{post_data['date'].strftime("%A, %B %d %Y")} in
        <!-- {{ post.categories | array_to_sentence_string  }} -->
HTML
        post_data['categories'].each do |category|
          html << "<a href='/categories/#{category}.html'>#{category.capitalize}</a>  "
        end
      html << <<-HTML
        <!-- <a href="#" style="color:#444;text-decoration:none">Category Name</a> -->
      </div>
    </div>
    <div style="background: #D5D5D5;clear: both;color: #FFE;display: block;font-size: 0;line-height: 0;height: 1px;margin-top:20px"></div>
  </div>
      HTML
    end
    File.open("categories/#{category}.html", 'w+') do |file|
      file.puts html
    end
  end
  puts 'done'
end

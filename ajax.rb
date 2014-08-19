require 'camping'

Camping.goes :Ajax


module Ajax::Controllers
  class Index 
    def get
      render :plain
    end 
  end

  class JQuery < R '/jquery'
    def get
      render :jquery
    end
  end

  class Scripts < R ('/scripts/(.*)')

    def get(asset_path)

            asset = File.read(File.dirname(__FILE__)+'/scripts/'+asset_path).gsub(/.*__END__/m, '')
           # @headers['Content-Type'] = 'text/css; charset=utf-8'
            asset
    end
  end
end

module Ajax::Views
   def layout
    html do
      head { title "Part 1: Http Request Examples" }
      meta :charset => "utf-8"
      meta :'http-equiv' => "X-UA-Compatible", :content => "IE=edge"
      meta :name => "viewport", :content => "width=device-width, initial-scale=1"
      style :src => "//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css"
      style :src => "//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap-theme.min.css"
      body do

        self << yield

        #script :src => "//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"
      end
    end
  end
  
  def plain
    div.container do
      h1 "XMLHttpRequest driven"
      p "Privet, this is a sample of varying AJAX requests and an attempt to elucidate what jQuery.ajax hides behind its scenes. AJAX == Asynchronous Javascript And XML. HTML is a specific form of XML."
      p "Hypothesis: the size of jQuery $.ajax method has been decreasing in size proportionally to the update to browser standards."
      p
        a.get! "Launch a simple GET", :href=>"#"
      p
        a.get_cross_domain! "Launch a cross domain GET", :href=>"#"

      div.result!
       script :src => '/scripts/bindings.js'
       script :src => '/scripts/httprequests.js'
    end
  end

  def jquery
    div.container do
      h1 "jQuery driven"
      p "Privet, this is a sample of varying AJAX requests and an attempt to elucidate what jQuery.ajax hides behind its scenes. AJAX == Asynchronous Javascript And XML. HTML is a specific form of XML."
      p "Hypothesis: the size of jQuery $.ajax method has been decreasing in size proportionally to the update to browser standards."
      p
        a.get! "Launch a simple GET", :href=>"#"
      p
        a.get_cross_domain! "Launch a cross domain GET", :href=>"#"

      div.result!

      script :src => 'http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.js'
      script :src => '/scripts/jquery_ajax.js'
    end
  end

end

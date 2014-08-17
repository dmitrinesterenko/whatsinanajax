require 'camping'

Camping.goes :Axaj


module Ajax:Controllers


end

module Ajax:Views
   def layout
    html do
      head { title "Http Request examples" }
      body do
        h1 "Simple AJAX requests"
        self << yield
      
      end
    end
  end
  
  def plain
      
     script { src: 'httprequests.js'}
  end

end

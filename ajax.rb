require 'camping'

Camping.goes :Ajax


module Ajax::Controllers
  class Index 
    def get
      render :plain
    end 
  end
end

module Ajax::Views
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
      
     script='httprequests.js'
  end

end

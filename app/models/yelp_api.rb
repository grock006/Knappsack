
class YelpApi

  attr_accessor :result 

   def initialize(json_result)
    @result = json_result
   end

   def self.renderResult(n)
      @result = n
   end
  
end
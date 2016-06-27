class Bench < ActiveRecord::Base

validates :description, :lat, :lng, presence: true

  def self.in_bounds(bounds)
    upper_bounds = bounds['b']
    lower_bounds = bounds['f']

    bounds_options = {
      upper_bound_lat: upper_bounds['b'],
      lower_bound_lat: lower_bounds['b'],
      upper_bound_lng: upper_bounds['f'],
      lower_bound_lng: lower_bounds['f']
    }

    Bench.where("lat BETWEEN :lower_bound_lat AND :upper_bound_lat AND lng BETWEEN :lower_bound_lng AND :upper_bound_lng", bounds_options)
  end

end

class Bench < ActiveRecord::Base

validates :description, :lat, :lng, presence: true

  def self.in_bounds(bounds)

    if bounds
      upper_bounds = bounds['NE']
      lower_bounds = bounds['SW']

      bounds_options = {
        upper_bound_lat: upper_bounds['lat'],
        lower_bound_lat: lower_bounds['lat'],
        upper_bound_lng: upper_bounds['lng'],
        lower_bound_lng: lower_bounds['lng']
      }

      return Bench.where("lat BETWEEN :lower_bound_lat AND :upper_bound_lat AND lng BETWEEN :lower_bound_lng AND :upper_bound_lng", bounds_options)
    else
      Bench.all
    end
  end

end

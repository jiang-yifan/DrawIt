json.array!(@portfolios) do |portfolio|
  json.partial!("portfolio",
   portfolio: portfolio,
   show_comments: false,
   show_drawings: false,
   show_hearts: true
  )
end

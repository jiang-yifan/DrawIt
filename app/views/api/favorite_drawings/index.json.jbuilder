json.array!(@favorite_drawings) do |drawing|
  json.partial!("api/drawings/drawing",
    drawing: drawing,
    show_comments: false,
    show_hearts: true
    )
end

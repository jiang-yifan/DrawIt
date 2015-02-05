json.array!(@drawings) do |drawing|
  json.partial!("drawing", drawing: drawing, show_comments: false)
end

json.extract!(
  portfolio,
  :id, :portfolio_image_url, :description
)

if show_comments
  json.comments do
    json.array!(portfolio.comments) do |comment|
      json.partial! "api/comments/comment",
          comment: comment
        end
    end
end

if show_drawings
  json.drawings do
      json.array!(portfolio.drawings) do |drawing|
          json.partial! 'api/drawings/drawing',
           drawing: drawing,
           show_comments: false
            end
      end
end

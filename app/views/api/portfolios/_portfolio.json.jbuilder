json.extract!(
  portfolio,
  :id, :portfolio_image_url, :description, :name
)

if show_comments
  json.comments do
    json.array!(portfolio.comments) do |comment|
      json.partial! "api/comments/comment",
          comment: comment,
          show_hearts: true
        end
    end

  json.tags do
    json.array!(portfolio.tags) do |tag|
      json.partial! 'api/tags/tag', tag: tag
    end
  end
end

if show_drawings
  json.drawings do
      json.array!(portfolio.drawings) do |drawing|
          json.partial! 'api/drawings/drawing',
           drawing: drawing,
           show_comments: false,
           show_hearts: true
            end
      end
end

if show_hearts
  json.hearts_count portfolio.hearts.count
  json.partial! "api/hearts/user_hearted",
    hearts: portfolio.hearts
end

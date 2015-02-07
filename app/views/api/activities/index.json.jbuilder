json.array!(@activities) do |activity|
  json.extract!(
    activity, :id, :activity_id, :activity_type
  )
end

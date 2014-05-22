class Book
	attr_reader :title

	def title= title
		@title = capitalize(title)
	end

	def capitalize(title)
		not_capitalized = %w(the a an and in of)
		capitalized = %w(i)
		words = title.split.map do |word|
			if capitalized.include?(word)
				word.capitalize
			elsif not_capitalized.include?(word)
				word
			else
				word.capitalize
			end
		end
		words[0] = words.first.capitalize
		words.join(" ")
	end
end
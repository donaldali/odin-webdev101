def echo message
	message
end

def shout message
	message.upcase
end

def repeat(message, times = 2)
	("#{message} " * times).strip
end

def start_of_word(word, characters)
	word[0..characters - 1]
end

def first_word phrase
	phrase.split.first
end

def titleize phrase
	little_words = ["and", "the", "over"]
	words = phrase.split
	words.map! do |word| 
		if little_words.include?(word)
			word
		else
			word.capitalize
		end
	end
  words[0] = words.first.capitalize
  words.join(" ")
end
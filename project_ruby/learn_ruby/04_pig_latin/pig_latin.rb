def translate_word word
	capitalized_word = (word == word.capitalize) ? true : false
	first_vowel_index = word.index(/[aeiouAEIOU]/)
	if (1...word.length).include?(first_vowel_index)
		if word[first_vowel_index].downcase == 'u' && 
		   word[first_vowel_index - 1].downcase == 'q'
			first_vowel_index += 1 
  	end
  	word = word[first_vowel_index..word.length - 1] + 
  	       word[0..first_vowel_index - 1]
	end
	word = word.downcase.capitalize if capitalized_word
	word << "ay"
end

def translate phrase
	phrase.split.map{ |word| translate_word(word) }.join(" ")
end

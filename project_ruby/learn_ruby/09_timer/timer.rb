class Timer
	attr_accessor :seconds

	def initialize
		@seconds = 0
	end

	def padded to_pad
		to_pad = '0' + to_pad.to_s if to_pad < 10
		to_pad.to_s
	end

	def time_string
		hours = @seconds / 3600
		minutes = (@seconds % 3600) / 60
		seconds = @seconds % 60
		"#{ padded(hours) }:#{ padded(minutes) }:#{ padded(seconds) }"
	end
end
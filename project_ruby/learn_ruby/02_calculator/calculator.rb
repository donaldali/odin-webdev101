def add(num1, num2)
	num1 + num2
end

def subtract(num1, num2)
	num1 - num2
end

def sum nums
	nums.inject(0){ |sum, num| sum += num }
end

def multiply nums
	nums.inject(1) { |product, num| product *= num }
end

def power(base, power)
	base**power
end

def factorial(num)
	return 1 if num <= 1
	multiply((1..num).to_a)
end
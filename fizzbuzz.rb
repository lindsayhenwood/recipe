#fizzbuzz assignment

def is_div_by_3?(number)
	if (number % 3 == 0)
		return true
	else
		return false
	end
end

def is_div_by_5?(number)
	if (number % 5 == 0)
		return true
	else 
		return false
	end
end


for n in 1..100
	output = ""

	if is_div_by_3?(n)
		output = output + "fizz"
	end

	if is_div_by_5?(n)
		output = output + "buzz"
	end

	if !(is_div_by_3?(n)) && !(is_div_by_5?(n))
		output = output + "#{n}"
	end

	puts output

end





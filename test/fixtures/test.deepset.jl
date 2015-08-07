using Distributions
using JSON

sigma = 1
d = Rayleigh( sigma )

x = linspace( .5, -100, 100 )

dmgf(t) = mgf(d, t )
y = map( dmgf, x )
println( y )

data = Dict([
	("sigma", sigma),
	("data", x),
	("expected", y)
])

outfile = open("./test/fixtures/deepset.json", "w")
JSON.json(data)

write( outfile, JSON.json(data) )

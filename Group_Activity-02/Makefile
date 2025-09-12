build:
	../.engine/node_modules/@marp-team/marp-cli/marp-cli.js --engine ../.engine/engine.js --pptx --allow-local-files main.md -o GA$(No)-Group10-$(Date).pptx
	../.engine/node_modules/@marp-team/marp-cli/marp-cli.js --engine ../.engine/engine.js --pdf  --allow-local-files main.md -o GA$(No)-Group10-$(Date).pdf
	../.engine/node_modules/@marp-team/marp-cli/marp-cli.js --engine ../.engine/engine.js --html  --allow-local-files main.md -o ../main.html
	cp GA$(No)-Group10-$(Date).pptx ../main.pptx
	cp GA$(No)-Group10-$(Date).pdf ../main.pdf

pptx:
	../.engine/node_modules/@marp-team/marp-cli/marp-cli.js --engine ../.engine/engine.js --pptx --allow-local-files main.md -o Group_Activity-$(No)-Group10-$(Date).pptx

pdf:
	../.engine/node_modules/@marp-team/marp-cli/marp-cli.js --engine ../.engine/engine.js --pdf  --allow-local-files main.md -o Group_Activity-$(No)-Group10-$(Date).pdf

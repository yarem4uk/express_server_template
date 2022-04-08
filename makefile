install:
	npm install
token:
	npx babel-node ./utils/tokenGen.js | xsel -i

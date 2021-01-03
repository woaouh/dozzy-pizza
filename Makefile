install:
	npm install

start:
	npm start

lint:
	./node_modules/.bin/eslint . --ext .js --ext .jsx

test:
	npm test

push:
	./node_modules/.bin/eslint . --ext .js --ext .jsx
	git push
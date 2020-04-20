.SILENT:

test:
	docker run --rm -t \
		-v $$PWD:/app -w /app \
		node:12-alpine \
		sh -c 'npm i && npm test'
.PHONY: test

watch:
	docker run --rm -t \
		-v $$PWD:/app -w /app \
		node:12-alpine \
		sh -c 'npm i && npm run watch'
.PHONY: watch

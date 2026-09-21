init:
	yarn install

build-web:
	yarn install
	npx expo export --platform web

dev:
	yarn install
	npx expo start --web --port 19007

ios:
	yarn install
	npx expo start --ios

android:
	yarn install
	npx expo start --android

purge:
	npx expo r -c
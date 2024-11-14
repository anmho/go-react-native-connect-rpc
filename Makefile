.PHONY: watch
watch:
	$(MAKE) -C api watch

.PHONY: gen
gen:
	$(MAKE) -C api gen
	@cd react-native; npm run generate


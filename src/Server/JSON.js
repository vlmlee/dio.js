/**
 * @return {string}
 */
Element.prototype.toJSON = function toJSON () {
	switch (this.flag) {
		case ElementComponent:
			return componentMount(this).children.toJSON()
		case ElementText:
			return this.children
	}

	var output = {type: element.type, props: element.props, children: []}
	var children = this.children
	var length = children.length

	while (length-- > 0)
		output.children.push((children = children.next).toJSON())

	return output
}
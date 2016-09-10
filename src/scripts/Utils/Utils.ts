export default class Utils {
	public static htmlSpecialChars(text) {
		return text
			.replace(/&/g, "&amp;")
			.replace(/</g, "&lt;")
			.replace(/>/g, "&gt;")
			.replace(/"/g, "&quot;")
			.replace(/'/g, "&#039;");
	}

	public static isUndefined(val) {
		return typeof val === "undefined";
	}

	public static isNull(val) {
		return val === null;
	}

	public static isEmpty(val) {
		return this.isUndefined(val) || this.isNull(val);
	}
}

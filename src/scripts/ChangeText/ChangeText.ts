// class implementation complete

export default class ChangeText {
    private txt = "";

    public addHtml(str) {
        this.txt += str;
    }

    public toString() {
        return this.txt;
    }
}
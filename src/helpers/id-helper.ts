
export default class idHelper {
    public static isIdInputValid(input: string): boolean {

        try {

            return parseInt(input) == 18;

        } catch (e) {

            return false

        }

    }
}

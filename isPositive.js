/*
 * Complete the isPositive function.
 * If 'a' is positive, return "YES".
 * If 'a' is 0, throw an Error with the message "Zero Error"
 * If 'a' is negative, throw an Error with the message "Negative Error"
 * Constraints
1<=n<=5
-100<=a<=100

 */
function isPositive(a) {
    letn=a.length;
    try {
        if (a > 0) {
          return "YES";
        } else if (a === 0) {
           throw new Error("Zero Error");
        } else if (a < 0) {
            throw new Error("Negative Error");
        }
    } catch (e) {
        return(e.message);
    }
}
isPositive(3);
isPositive(0);
isPositive(-1);

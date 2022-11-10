// 2299. Strong Password Checker II

// (Using Regex)

// A password is said to be strong if it satisfies all the following criteria:

// It has at least 8 characters.
// It contains at least one lowercase letter.
// It contains at least one uppercase letter.
// It contains at least one digit.
// It contains at least one special character. The special characters are the characters in the following string: "!@#$%^&*()-+".
// It does not contain 2 of the same character in adjacent positions (i.e., "aab" violates this condition, but "aba" does not).
// Given a string password, return true if it is a strong password. Otherwise, return false.

/**
 * @param {string} password
 * @return {boolean}
 */

let password = "IloveLe3tcode!";

var strongPasswordCheckerII = function (password) {
    
    const regex = new RegExp("^(?!.*(.)\\1)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()+-]).{8,}$", 'g');

    return regex.exec(password) !== null;
};

console.log("The password: " + password);
console.log(strongPasswordCheckerII(password));

// Input: password = "IloveLe3tcode!"
// Output: true

// Explanation: The password meets all the requirements. Therefore, we return true.

// -- Readable -- //
// ^ # start
// (?!.*([0-9])\1) # 2 same consecutive digits not allowed
// (?!.*([a-z])\2) # 2 same consecutive lowercase letters not allowed
// (?!.*([A-Z])\3) # 2 same consecutive uppercase letters not allowed
// (?!.*([!@#$%^&*()+-])\4) # 2 same consecutive special chars not allowed
// (?=.*[a-z])\ # must have at least one lowercase letter
// (?=.*[A-Z])\ # must have at least one uppercase letter
// (?=.*[0-9])\ # must have at least one digit
// (?=.*[!@#$%^&*()+-])  # must have at least one special char
// [A-Za-z0-9!@#$%^&*()+-]{8,} # allowed chars – 8 or more times (using {8,})
// $ # end


// -- Simplified -- //
// ^ # start
// (?!.*(.)\1) # 2 same consecutive chars not allowed
// (?=.*[a-z])\ # must have at least one lowercase letter
// (?=.*[A-Z])\ # must have at least one uppercase letter
// (?=.*[0-9])\ # must have at least one digit
// (?=.*[!@#$%^&*()+-])  # must have at least one special char
// .{8,} # any char – 8 or more times (using {8,})
// $ # end
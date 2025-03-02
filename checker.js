// A simple grammar checker script in JavaScript 
function checkGrammar() {
    // Get the input text from the user 
    const text = document.getElementById("inputText").value; 

    // Initialize an array to store error messages
    let errors = [];
}

    // 1. Check for subject-verb agreement (simple example)
    const subjectVerbAgreement = /(\bI\b|\bYou\b|\bHe\b|\bShe\b|\bThey\b)[^a-zA-Z]*(is|are)/;
    if (subjectVerbAgreement.test(text)) {
        errors.push("Check subject-verb agreement. 'I' and 'You' should be followed by 'am', not 'is' or 'are'.");
    }

    // 2. Simple check for missing punctuation at the end of the sentence
    const  punctuationCheck = /[a-zA-Z]+$/;
    if (punctuationCheck.test(text) && !/[.!?]$/.test(text)) {
        errors.push("Sentence should end with proper punctuation (e.g., '.', '!', or '?').");
    }

    // 3. Check for common typo errors (just an example, this can be expanded)
    const commonTypos = /teh/;
    if (commonTypos.test(text)) {
        errors.push("You have a common typo: 'teh' should be 'the'.");
    }

    // 4. Check for double spaces
    const doubleSpaceCheck = /\s{2,}/;
    if (doubleSpaceCheck.test(text)) {
        errors.push("Double spaces found. Please remove extra spaces.");
    }

    // 5. Check for commonly confused words (your vs you're, its vs it's)
    const confusedWord = /\b(your|you're|its|it's)\b/;
    if (confusedWords.test(text)) {
        const wordCheck = [
            { regex: /\byour\b/, message: "Check if 'your' should be 'you're'." },
            { regex: /\byou're\b/, message: "Check if 'you're should be 'your'." },
            { regex:/\bits\b/, message: "Check if 'its' shoulb be 'it's'." },
            { regex: /\bit's\b/, message: "Check if 'it's should be 'its'." }
        ];
    wordCheck.forEach(rule => { 
        if (rule.regex.test(text)) {
            errors.push(rule.message);
        }
    });
}

    // 6. Check for proper capitalization at the start of sentences
    const capitalizationCheck = /^[a-z]/;
    if (capitalizationCheck.test(text.trim())) {
        errors.push("The first word of a sentence should be capitalized.");
    }

    // 7. Check for repeated word (e.g., "the the")
    const repeatedWordCheck = /\b(\w+)\s+\1\b/;
    if (repeatedWordCheck.test(text)) {
        errors.push("Repeated words detected (e.g., 'the the').");
    }

    // If no errors were found
    if (errors.length ===0) {
        document.getElementById("result").innerText = "No grammar errors detected";
    } else {
        // Display all the errors
        document.getEkementById("result").innerText = "Grammar errors:\n" + errors.join("\n");
    }

    <script src="checker.js"></script>
    
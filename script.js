$(function () {
    // Hi! Welcome to my magnet poetry project! I love
    // poetry so much and have always loved magnet poetry.
    // I went looking for a good app to use to make some
    // and discovered in horror that most of them charge
    // microtransactions to get more words. Isn't that insane?
    // Words should be free!

    // === DEFINING VARIABLES ===
    // These define the words in my 'bank'
    // I have separated them into parts of speech to allow some 'automated' grammar fixes!
    let suffixesArr = [
        "ing",
        "y",
        "es",
        "ies",
        "s",
        "d",
        "ed",
        "ness",
        "-like",
        "-shaped",
        "-thin",
        "-sweet",
        "half-"
    ];

    let commonArr = [
        "a",
        "an",
        "the",
        "there",
        "is",
        "these",
        "those",
        "are",
        "they",
        "their",
        "she",
        "her",
        "he",
        "his",
        "me",
        "let",
        "I",
        "for",
        "am",
        "you",
        "because",
        "if",
        "be",
        "to",
        "too",
        "of",
        "in",
        "have",
        "not",
        "on",
        "as",
        "at",
        "but",
        "by",
        "do",
        "from",
        "or",
        "will",
        "so",
        "get",
        "give",
        "would",
        "could",
        "should",
        "was",
        "go",
        "were",
        "your",
        "us",
        "we",
        "them",
        "like",
        "let's",
        "and",
        "oh",
        "myself",
        "yourself",
        "anything",
        "nothing",
        "everything",
        "who",
        "what",
        "when",
        "where",
        "why",
        "won't",
        "see",
        "my",
        "within",
        "more",
        "no",
        "want",
        "toward"
    ];

    let nounArr = [
        "tree",
        "leaf",
        "star",
        "rose",
        "thing",
        "mushroom",
        "toadstool",
        "willow",
        "canopy",
        "witch",
        "goddess",
        "mother",
        "stillness",
        "mistress",
        "stream",
        "meadow",
        "deer",
        "pond",
        "gate",
        "crystal",
        "river",
        "cave",
        "mystery",
        "cliff",
        "forest",
        "desert",
        "woods",
        "chains",
        "bat",
        "owl",
        "butterfly",
        "moth",
        "serpent",
        "mermaid",
        "frog",
        "toad",
        "creature",
        "wolf",
        "cat",
        "bird",
        "fog",
        "wing",
        "insect",
        "critter",
        "poison",
        "rainwater",
        "storm",
        "weapon",
        "hunger",
        "acid",
        "wood",
        "star",
        "passion",
        "moon",
        "garden",
        "vine",
        "iris",
        "azalea",
        "pine",
        "petal",
        "dawn",
        "vision",
        "sky",
        "throat",
        "cloud",
        "bough",
        "lilac",
        "silver",
        "cream",
        "strength",
        "desert",
        "light",
        "shadow",
        "dew",
        "myth",
        "sea-foam",
        "honey",
        "nectar",
        "face",
        "gloam",
        "body",
        "weakness",
        "pollen",
        "snow",
        "savage",
        "sand",
        "mist",
        "tea",
        "bark",
        "rebirth",
        "death",
        "eternity",
        "mercy",
        "mouth",
        "blood",
        "sword",
        "spirit",
        "burial",
        "destruction",
        "elixir",
        "teeth",
        "scent",
        "morning",
        "evening",
        "night",
        "tide",
        "seawater",
        "coffee",
        "neck",
        "glass",
        "pearl",
        "monster",
        "flower",
        "earth",
        "woman",
        "shield",
        "pattern",
        "hole",
        "dessert",
        "salt",
        "hope",
        "temple",
        "space",
        "serendipity",
        "bubble",
        "twilight",
        "growth",
        "hand",
        "war",
        "limit",
        "outside",
        "violence",
        "dawn",
        "sorrow",
        "stem",
        "cowardice",
        "sandbar",
        "dusk",
        "blood",
        "eyes",
        "life",
        "mind",
        "blossom",
        "labor",
        "voice",
        "honeydew",
        "unknown",
        "sunbeam",
        "moment",
        "warrior",
        "day",
        "gum",
        "midday",
        "catharsis",
        "tongue",
        "haze",
        "birth",
        "afternoon",
        "pain",
        "wilderness",
        "lagoon",
        "planet",
        "arch"
    ];

    let verbArr = [
        "hang",
        "say",
        "tell",
        "ask",
        "caught",
        "find",
        "shine",
        "listen",
        "dry",
        "glitter",
        "nestle",
        "flicker",
        "glow",
        "soul",
        "form",
        "cloak",
        "walk",
        "fade",
        "sparkle",
        "choice",
        "cling",
        "shape",
        "dig",
        "hover",
        "remind",
        "pulse",
        "break",
        "crawl",
        "incense",
        "smile",
        "hold",
        "create",
        "drift",
        "crack",
        "stay",
        "drip",
        "flash",
        "sweep",
        "know",
        "writhe",
        "bloom",
        "brim",
        "awake",
        "asleep",
        "grow",
        "bask",
        "fold",
        "ignite",
        "illuminate",
        "intensify",
        "gravitate",
        "clutch",
        "cower",
        "lie",
        "swallow",
        "soar",
        "shrivel",
        "shimmer",
        "crunch",
        "float",
        "breathe",
        "weave",
        "make",
        "crush",
        "bounce",
        "veil",
        "soak",
        "shrink",
        "warp",
        "reflect",
        "reach",
        "tremble",
        "whisper",
        "haunt",
        "bend",
        "pulsate",
        "push",
        "obliterate",
        "smooth",
        "roam",
        "love",
        "dive",
        "crash",
        "settle",
        "stretch",
        "blink",
        "awaken",
        "rush",
        "curl",
        "pull",
        "edge",
        "glide",
        "embrace",
        "lurch",
        "electrify",
        "roar",
        "squeeze",
        "grasp",
        "catapult",
        "surrender",
        "march",
        "howl",
        "decay",
        "growl",
        "groan",
        "smell",
        "look",
        "forgive",
        "scream",
        "lungs",
        "weep",
        "devastate",
        "shatter",
        "watch",
        "dance",
        "touch",
        "show",
        "believe",
        "tell",
        "ask"
    ];

    let adjectiveArr = [
        "cool",
        "pale",
        "sharp",
        "sacred",
        "infinite",
        "unhurried",
        "flat",
        "outer",
        "fair",
        "fresh",
        "quiet",
        "dear",
        "empty",
        "magical",
        "pretty",
        "deep",
        "dying",
        "first",
        "uninterrupted",
        "round",
        "crimson",
        "young",
        "other",
        "alive",
        "patient",
        "starless",
        "cheap",
        "feral",
        "brittle",
        "tight",
        "half-lit",
        "cascading",
        "full",
        "bright",
        "fringed",
        "forbidden",
        "tangled",
        "sunless",
        "twisted",
        "unsteady",
        "mystical",
        "silken",
        "soft",
        "still",
        "sweet",
        "warm",
        "short",
        "open",
        "unsettled",
        "sleepy",
        "powerful",
        "perfumed",
        "wet",
        "burnt",
        "long",
        "snowy",
        "thick",
        "stagnant",
        "grove",
        "purple",
        "black",
        "green",
        "pink",
        "yellow",
        "blue",
        "red",
        "orange",
        "violet",
        "loose",
        "broken",
        "milky"
    ];

    let adverbArr = [
        "warmly",
        "barely",
        "sleepily",
        "sadly",
        "slowly",
        "here",
        "there",
        "clumsily",
        "curiously",
        "wistfully",
        "farthest",
        "endlessly",
        "darkest",
        "boldly",
        "brightly",
        "terribly",
        "always",
        "sickly",
        "often",
        "tomorrow",
        "quickly",
        "today",
        "yesterday",
        "later",
        "noiselessly",
        "deafeningly",
        "weakly",
        "cruelly"
    ];

    let prepositionArr = [
        "above",
        "beside",
        "among",
        "beneath",
        "across",
        "before",
        "behind",
        "below",
        "onto",
        "inside",
        "under",
        "up",
        "with",
        "over",
        "away",
        "along",
        "next",
        "underneath",
        "under"
    ];

    var otherArr = [...adverbArr, ...prepositionArr, ...adjectiveArr];
    var myWords;
    var savedCanvas;
    var customization;

    // .sort() alphabetizes the array, but it's not perfect!
    nounArr = nounArr.sort();
    verbArr = verbArr.sort();
    suffixesArr = suffixesArr.sort();
    otherArr = otherArr.sort();
    commonArr = commonArr.sort();



    // === ON LOAD ===
    // this function runs every time the page is refreshed
    $(function () {
        // if history exists, restore canvas
        if (JSON.parse(localStorage.getItem("savedCanvas")) !== null) {
            // if it finds something, it assigns it to a variable
            var lastCanvas = JSON.parse(
                localStorage.getItem("savedCanvas", JSON.stringify(savedCanvas))
            );
            // and replaces the current canvas' html
            $("#canvas").html(lastCanvas);
            // this was necessary to re-add a new 'draggable' event to the dynamically added items
            $("#canvas").children("span").addClass("dynDrag");
            addDraggableDynamic();
        }
        var currentBg = $("#canvas").css("background-color");
        $("#canvasColor").val(currentBg);

        // loads settings
        if (JSON.parse(localStorage.getItem("customization")) !== null) {
            customization = JSON.parse(localStorage.getItem("customization"));
            loadSettings();
        }
        loadSettings();
    });


    // this is the JSON object which holds the values for
    // the 'customize' localStorage settings
    // i'm so silly for not using these (objects) more
    customization = {
        canvasColor: "#FED4E0",
        magnetColor: "#ffffff",
        borderColor: "black",
        textColor: "black",
        magnetBorder: "solid", // this one's tricky and gonna need some if statements
        magnetFont: "sans-serif",
        magnetTilt: "none",
        canvasBackgroundImage: "none",
        borderType: "solid",
        bgImageStyle: "repeat"
    };

    // === LOADING WORD BANK WORDS ===

    // this checks the local history to see if anything is saved in the wordbank
    // if it's null, that means the array is empty.
    if (JSON.parse(localStorage.getItem("myWords")) === null) {
        myWords = [];
    } else {
        myWords = JSON.parse(localStorage.getItem("myWords"));
    }


    // === WORD BANK POPULATION ===
    // this adds the custom words to the 'MyWords' section from the history.
    function populateCustomWords() {
        myWords.forEach((element, index) => {
            if (myWords !== null) {
                if (myWords.includes(element)) {
                    $("#myWords").append(
                        '<span class="dragWord ui-droppable magnet" id="' +
                        element +
                        '">' +
                        element +
                        "</span>"
                    );
                }
            }
        });
    }

    // === CANVAS SAVING ===
    // Note: The canvas saves automatically after every drop.
    // is this called anywhere?
    function saveCanvas() {
        savedCanvas = $("#canvas").html();
        localStorage.setItem("savedCanvas", JSON.stringify(savedCanvas));
        // console.log("hi");
    }

    // === BEGIN: LOAD CUSTOMIZATION ===

    // thank you owocean for SAVING MY LIFE!!!
    // this function loads AFTER the DOM
    $(window).on("load", function () {
        if (JSON.parse(localStorage.getItem("customization")) !== null) {
            // code here

            $("#canvasColor").val([customization.canvasColor]);
            $("#magnetColor").val([customization.magnetColor]);
            $("#textColor").val([customization.textColor]);
            $("#borderColor").val([customization.borderColor]);
        }
    });

    // === LOAD CSS FROM LOCALSTORAGE ===
    // the 'customization' variable holds the object which stores
    // the settings themselves. some settings translate into the
    // CSS values themselves, but some other settings were more complicated
    // (did I just discover the secret to programming??
    // making stuff do other stuff?

    function loadSettings() {
        $("#canvas").css("background-color", customization.canvasColor);
        $(".magnet").css("font-family", customization.magnetFont);
        $(".magnet").css("color", customization.textColor);

        //$('input:radio[name=border]').val(customization.magnetBorder);
        // BORDER COLOR
        if (customization.borderColor === "none") {
            $(".magnet").css("border-color", "none");
        } else {
            $(".magnet").css("border-color", customization.borderColor);
        }

        $("#canvas").css("background-image", customization.canvasBackgroundImage);
        $(".magnet").css("background-color", customization.magnetColor);
        $(".dragWord").css("background-color", customization.magnetColor);

        // this checks for the inputs for the magnet tilt
        if (customization.magnetTilt === "both") {
            $(".magnet").css("transform", "none");
            $(".magnet:nth-child(odd)").css("transform", "rotate(-3deg)");
            $(".magnet:nth-child(even)").css("transform", "rotate(3deg)");
            // I learned here that you need to manually re-set the chosen
            // values for inputs or else when you reload the page, the selected
            // options will be wrong. Soooo much fun, lol.
            $("input:radio[name=tilt]").val(["none"]);
        } else if (customization.magnetTilt === "left") {
            $(".magnet").css("transform", "rotate(-3deg)");
            $("input:radio[name=tilt]").val(["left"]);
        } else if (customization.magnetTilt === "right") {
            $(".magnet").css("transform", "rotate(3deg)");
            $("input:radio[name=tilt]").val(["right"]);
        } else if (customization.magnetTilt === "none") {
            $("input:radio[name=tilt]").val(["both"]);
            $(".magnet").css("transform", "none");
        }

        if (customization.bgImageStyle === "repeat") {
            $('#canvas').css("background-repeat", "repeat");
            $("#canvas").css("background-size", "auto");
            $("input:radio[name=bgimg]").val(["repeat"]);
        } else if (customization.bgImageStyle === "cover") {
            $('#canvas').css("background-size", "cover");
            $("input:radio[name=bgimg]").val(["cover"]);
        }
    }


    // BEGIN === CLEAR LOCALSTORAGE === //

    // the below function was originally all in each event listener
    // i wish functions weren't literally the FIRST thing
    // i learned (and the first thing taught everywhere)
    function clearStorage(type) {
        var msg = `Are you sure you want to delete your saved ${type}?`;
        if (confirm(msg) == true) {
            if (type === "words") {
                localStorage.removeItem("myWords");
                // this lets me reload in codepen lol
                history.go(0);
            } else if (type === "magnets") {
                localStorage.removeItem("savedCanvas");
                history.go(0);
            } else if (type === "customization") {
                localStorage.removeItem("customization");
                history.go(0);
            }
        }
    }

    // === EVENT: CLICK ON WORDBANK 'CLEAR ALL' ===
    $("#clearBankHistory").on("click", function () {
        clearStorage("words");
    });

    // === EVENT: CLICK ON CLEAR CANVAS ===
    $("#clearCanvas").on("click", function () {
        clearStorage("magnets");
    });

    // === EVENT: CLEAR CUSTOMIZATION ===
    $("#clearCustomization").on("click", function () {
        clearStorage("customization");
    });
    // END === CLEAR LOCALSTORAGE === //


    // BEGIN === WORDBANK SETUP ===
    // this combines all of the word arrays into one giant array
    // I need it so I can automatically populate the word bank with magnets
    let fullWordArr = [
        ...suffixesArr,
        ...commonArr,
        ...nounArr,
        ...verbArr,
        ...adjectiveArr,
        ...adverbArr,
        ...prepositionArr,
        ...myWords
    ];

    function populateWordBank() {
        // this loops through every word in all arrays and
        // adds the 'magnets' to the wordbank in their respective divs
        fullWordArr.forEach((element, index) => {
            // I applied the 'suffix' class here because I wanted to style the suffices
            // with no left border, so they fit nearly onto existing words
            if (suffixesArr.includes(element)) {
                $("#suffixes").append(
                    '<span class="dragWord ui-droppable magnet suffix" id="' +
                    element +
                    '">' +
                    element +
                    "</span>"
                );
            } else if (commonArr.includes(element)) {
                $("#commonWords").append(
                    '<span class="dragWord ui-droppable magnet" id="' +
                    element +
                    '">' +
                    element +
                    "</span>"
                );
            } else if (nounArr.includes(element)) {
                $("#nouns").append(
                    '<span class="dragWord ui-droppable magnet" id="' +
                    element +
                    '">' +
                    element +
                    "</span>"
                );
            } else if (verbArr.includes(element)) {
                $("#verbs").append(
                    '<span class="dragWord ui-droppable magnet" id="' +
                    element +
                    '">' +
                    element +
                    "</span>"
                );
            } else if (myWords !== null) {
                if (myWords.includes(element)) {
                    $("#myWords").append(
                        '<span class="dragWord ui-droppable magnet" id="' +
                        element +
                        '">' +
                        element +
                        "</span>"
                    );
                } else if (otherArr.includes(element)) {
                    $("#otherWords").append(
                        '<span class="dragWord ui-droppable magnet" id="' +
                        element +
                        '">' +
                        element +
                        "</span>"
                    );
                }
            }
        });
    }

    populateWordBank();
    // END === WORDBANK SETUP ===

    // BEGIN === CANVAS DRAG & DROP "RULES" & FUNCTIONALITY ===

    // this tells the #canvas element it is a 'droppable' location
    $("#canvas").droppable({
        accept: ".dragWord", // it accepts only items with this class
        drop: function (e, ui) {
            // everything in this function is triggered when the word is dropped
            // this gets the word's ID (which is the word itself)
            var wordID = $(ui.draggable)[0].id;

            // === SUFFIX HANDLING (grammar nerd stuff) ===
            // if the chosen word is a 'suffix'...
            if (suffixesArr.includes(wordID)) {
                //console.log('suffixArr includes...');
                var offset = $(this).position();
                var clone = ui.draggable.clone(false);
                clone
                    .css("left", ui.offset.left - offset.left)
                    .css("top", ui.offset.top - offset.top)
                    .css("position", "absolute")
                    .removeClass("ui-draggable ui-draggable-dragging dragWord")
                    .removeClass("verbs")
                    .addClass("dropped-element addOnWords magnet dynWord");
                //console.log(clone);
                $("#canvas").append(clone);

                // this makes the suffices 'snap' to existing magnets
                $(clone).draggable({
                    containment: "parent",
                    snap: true,
                    snapMode: "both",
                    snapTolerance: 10,
                });
                addDraggable();

                // if the ID is NOT empty
            } else if ($(ui.draggable)[0].id != "") {
                var offset = $(this).position();
                var clone = ui.draggable.clone(false);
                // Note: This controls the CSS of the items
                // and removes some unnecessary classes.
                clone
                    .css("left", ui.offset.left - offset.left)
                    .css("top", ui.offset.top - offset.top)
                    .css("position", "absolute")
                    .removeClass("ui-draggable ui-draggable-dragging dragWord")
                    .removeClass("verbs")
                    .addClass("dropped-element addOnWords magnet");

                // adds to canvas
                $("#canvas").append(clone);

                // Note: This makes it so you cannot
                // drag the word outside of the canvas.
                $(clone).draggable({
                    containment: "parent",
                    drag: function (e, ui) {}
                });
            }
            saveCanvas();
        }
    });

    // this is only for cloning, I need a separate draggable for 
    // dynamically added items (specifically the word bank items)
    function addDraggable() {
        //console.log("addDraggable()");
        $(".dragWord").draggable({
            helper: "clone",
            cursor: "move",
            revert: false,
            zIndex: 99,
            grid: [5, 5],
        });
    }

    addDraggable();

    // I had to make custom draggable settings for the 'loaded' items
    // these ones do NOT have 'helper:clone' - which means you are moving
    // the original piece from the canvas
    function addDraggableDynamic() {
        $(".dynDrag").draggable({
            cursor: "move",
            revert: false,
            grid: [5, 5],
            containment: "parent",
        });
    }

    // END === CANVAS DRAG & DROP "RULES" & FUNCTIONALITY ===

    // === DELETE WORDS FROM CANVAS ===

    // checks if device is mobile
    if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            navigator.userAgent
        )
    ) {
        $(".mobile").css("display", "block");
        $(".desc").css("display", "none");
        $(".instruct").css("display", "none");
        $(document).on("taphold", ".dropped-element", function () {
            $(this).remove();
        });
    } else {
        // if not mobile, then the words are deleted on doubleclick
        $(document).on("dblclick", ".dropped-element", function () {
            var toDelete = $(this).text();
            $(this).remove();
            saveCanvas();
        });
    }

    // BEGIN: === WORD BANK ===

    // === MINIMIZING BANK ===
    // when the 'x' button is clicked...
    $("#minimize").on("click", function () {
        // hide words
        $("#chooseWords").css("display", "none");
        // make height full
        $(".wordBank").css("height", "100%");
        // show maximize button
        $("#maximize").css("display", "block");
    });

    // === MAXIMIZING BANK ===
    // when the '<<' button is clicked...
    $("#maximize").on("click", function () {
        // show words
        $("#chooseWords").css("display", "block");
        // make width normal
        $(".wordBankWrapper").css("width", "30%");
        // hide maximize button
        $("#maximize").css("display", "none");
    });

    // === ADDING WORDS TO THE BANK ===

    // === EVENT: CLICK ON '+ ADD WORD'
    $(document).on("click", "#addWord", function (e) {
        // create & append an input box
        var inputBox = `<div class="input"><input type="text" placeholder="press enter to submit" id="word"><input type="submit" id="submitWord" value="add"></div>`;
        $("#myInput").html(inputBox);
        $('#word').focus();
    });

    // === EVENT CLICK ON 'ADD WORD' ===
    $(document).on("click", "#submitWord", function (e) {
        // assign word to variable
        var newWord = $(this).siblings("#word").val();
        addWord(newWord);
    });


    // === EVENT: CLICK IN INPUT BOX ===
    // Note: I nested these so it would only listen for the
    // enter keypress while the cursor is active in the input box.
    $(document).on("focus", "#word", function (e) {
        // === EVENT: PRESS ENTER ===
        $("#word").on("keypress", function (event) {
            if (event.keyCode == 13) {
                // assign word to variable
                var newWord = $(this).val();
                addWord(newWord);
            }
        });
        addDraggable();
    });

    // === EVENT: DOUBLE-CLICK ON WORD IN 'ADDWORDS'
    $(document).on("dblclick", "#myWords > span", function (e) {
        var removedWord = $(this).text();
        $(this).remove();
        removeWord(removedWord);
    });

    // BEGIN === LOGIC: ADD WORD ===
    function addWord(word) {
        $(".none").css("display", "none");
        $(".input").remove();
        //console.log(myWords);
        if (!myWords.includes(word)) {
            //console.log('unique');
            // add word to array
            myWords.push(word);
            // hide message
            $("#myWords > .none").css("display", "none");
            // this makes the word show right away, instead of reloading the whole page
            $("#myWords").append(
                '<span class="dragWord ui-droppable ui-draggable ui-draggable-handle magnet" id="' +
                word +
                '">' +
                word +
                "</span>"
            );
            // this clears the input value after submission
            $("#word").val("");
            localStorage.setItem("myWords", JSON.stringify(myWords));
            loadSettings();
            addDraggable();
        } else {
            // this displays a quick message that says there is a duplicate word
            $(".sorry").css("display", "block");
            $(".sorry").fadeOut("slow");
        }
    }
    // END === LOGIC: ADD WORD ===

    // === LOGIC: REMOVE WORD ===
    function removeWord(word) {
        if (myWords.includes(word)) {
            var wordIndex = myWords.indexOf(word);
            console.log(myWords);
            console.log(wordIndex);
            console.log(myWords.slice(1, wordIndex));
            myWords.splice(1, wordIndex);
            localStorage.setItem("myWords", JSON.stringify(myWords));
        }
    }

    // END === WORD BANK ===

    //


    // === BEGIN: CUSTOMIZATION EVENTS ===

    // === EVENT: CANVAS COLOR BACKGROUND CHANGE ===
    $("#canvasColor").on("input", function () {
        //var hexCode = rgbToHex($(this).val());
        customization.canvasColor = $(this).val();
        $("#canvas").css("background-color", customization.canvasColor);
        console.log(customization.canvasColor);
        //console.log("saved color");
        localStorage.setItem("customization", JSON.stringify(customization));
    });

    // === EVENT: MAGNET COLOR BACKGROUND CHANGE ===
    $(document).on("input", "#magnetColor", function () {
        //console.log($(this).val());
        customization.magnetColor = $(this).val();
        $(".magnet").css("background-color", $(this).val());
        //$('.magnet').css("background-color", customization.magnetColor);
        localStorage.setItem("customization", JSON.stringify(customization));
    });

    // === EVENT: MAGNET TEXT COLOR CHANGE ===
    $("#textColor").on("input", function () {
        customization.textColor = $(this).val();
        $(".magnet").css("color", $(this).val());
        //console.log(customization);
        //console.log("saved color");
        localStorage.setItem("customization", JSON.stringify(customization));
    });

    // === EVENT: MAGNET BORDER COLOR CHANGE ===
    $("#borderColor").on("input", function () {
        var borderColor = $(this).val();
        customization.borderColor = borderColor;
        $(".magnet").css("border-color", borderColor);
        localStorage.setItem("customization", JSON.stringify(customization));
    });

    // solid border CSS
    function solidBorder() {
        $(".magnet").css("border-style", customization.magnetBorder);
        $(".magnet").css("border-width", "1px");
        $(".magnet").css("border-color", customization.borderColor);
    }

    // shadow border CSS
    function shadowBorder() {
        $(".magnet").css("border-style", "solid");
        $(".magnet").css("border-bottom-width", "3px");
        $(".magnet").css("border-right-width", "3px");
        $(".magnet").css("border-color", customization.borderColor);
    }

    // === EVENT: BORDER TYPE CHANGE ===
    $("input[type=radio][name=border]").on("click", function () {
        var chosenBorder = $(this).val();
        console.log($(this).val());
        if (chosenBorder === "none") {
            customization.magnetBorder = "none";
            $(".magnet").css("border-style", customization.magnetBorder);
        } else if (chosenBorder === "solid") {
            chosenBorder = $(this).val();
            customization.magnetBorder = "solid";
            solidBorder();
            $(".magnet").css("border-style", "solid");
            $(".magnet").css("border-width", "1px");
            $(".magnet").css("border-color", borderColor);
        } else if (chosenBorder === "shadow") {
            shadowBorder();
        }
        //console.log($(this).val());
        //console.log('border');
        localStorage.setItem("customization", JSON.stringify(customization));
        //$('.wordStyle').css("background-color", $(this).val())
    });

    // === EVENT: MAGNET TILT CHANGE ===
    $("input[type=radio][name=tilt]").on("input", function () {
        //console.log('noted');
        var chosenTilt = $(this).val();
        customization.magnetTilt = chosenTilt;
        if (chosenTilt === "none") {
            customization.magnetTilt = "none";
            $(".magnet:nth-child(odd)").css("transform", "none");
            $(".magnet:nth-child(even)").css("transform", "none");
            $(".magnet").css("transform", "none");
        } else if (chosenTilt === "left") {
            $(".magnet:nth-child(odd)").css("transform", "none");
            $(".magnet:nth-child(even)").css("transform", "none");
            $(".magnet").css("transform", "rotate(-3deg)");
        } else if (chosenTilt === "right") {
            $(".magnet:nth-child(odd)").css("transform", "none");
            $(".magnet:nth-child(even)").css("transform", "none");
            $(".magnet").css("transform", "rotate(3deg)");
        } else if (chosenTilt === "both") {
            $(".magnet:nth-child(odd)").css("transform", "rotate(-3deg)");
            $(".magnet:nth-child(even)").css("transform", "rotate(3deg)");
        }
        //console.log($(this).val());
        //console.log('border');
        localStorage.setItem("customization", JSON.stringify(customization));
        //$('.wordStyle').css("background-color", $(this).val())
    });

    // === EVENT: MAGNET FONT CHANGE === //
    $("#font").on("change", function (e) {
        e.preventDefault();
        customization.magnetFont = $(this).val();
        var selected = $(this).val();
        $(".magnet").css("font-family", $(this).val());
        localStorage.setItem("customization", JSON.stringify(customization));
    });
    var bg;

    // === EVENT: UPLOAD BACKGROUND CHANGE === //
    $("#uploadBg").on("change", function (e) {
        var file = e.target.files[0];
        var reader = new FileReader();
        reader.onloadend = function () {
            bg = reader.result;
            $("#canvas").css("background-image", "url(" + reader.result + ")");
            customization.canvasBackgroundImage = "url(" + reader.result + ")";
            localStorage.setItem("customization", JSON.stringify(customization));
        };
        if (file) {
            reader.readAsDataURL(file);
        }
    });

    // === EVENT: CLEAR BACKGROUND IMAGE
    $("#clearBgImg").on("click", function () {
        $("#canvas").css("background-image", "none");
        customization.canvasBackgroundImage = "none";
        localStorage.setItem("customization", JSON.stringify(customization));
    });

    // === EVENT: BACKGROUND IMAGE SETTINGS CHANGE ===
    $("input[type=radio][name=bgimg]").on("input", function () {
        var chosenOption = $(this).val();
        if (chosenOption === "repeat") {
            $("#canvas").css("background-repeat", "repeat");
            $("#canvas").css("background-size", "auto");
            customization.bgImageStyle = "repeat";
            localStorage.setItem("customization", JSON.stringify(customization));
        } else if (chosenOption === "cover") {
            $("#canvas").css("background-size", "cover");
            customization.bgImageStyle = "cover";
            localStorage.setItem("customization", JSON.stringify(customization));
        }
    });

    // === EXPORT ===

    // === EVENT: CLICK ON "EXPORT" ===
    $(document).on("click", "#exportPoem", function (e) {
        e.preventDefault();
        convert2image();
        $("#export").css("display", "block");
        $("#export").fadeIn(5000);
        $("#export").fadeOut(5000);
    });

    // i'm using domtoimage for the image export
    // it's the only one i've worked with that works really well:
    function convert2image() {
        domtoimage
            .toJpeg(document.getElementById("canvas"), {
                quality: 0.95
            })
            .then(function (dataUrl) {
                var link = document.createElement("a");
                link.download = "poem.jpeg";
                link.href = dataUrl;
                link.click();
            });
    }

});
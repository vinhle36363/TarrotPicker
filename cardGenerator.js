var deck = new Array();
var deck1 = [
    {
        name: 'The Fool',
        desc: 'he Fool is a very powerful card in the Tarot deck, usually' +
        '                representing a new beginning - and, consequently,' +
        '                an end to something in your old life. The Fool\'s position in your' +
        '                spread reveals which aspects of your life may be subject to change.' +
        '                The Fool portends important decisions ahead which may not be easy to make,' +
        '                and involve an element of risk for you.' +
        '                Approach the changes with optimism and care to gain the most positive outcome.'
    },
    {
        name: 'The Magician',
        desc: 'The Magician generally associates with intelligent and skillful communicators. His presence in your spread indicates a level of self-confidence and drive which allows you to translate ideas into action. A practical card, the revelations it brings are best applied to the pragmatic and physical aspects of your life, rather then the ephemeral or theoretical. Your success in upcoming ventures in politics or business will likely hinge upon your own strength of will and determination.'
    },
    {
        name: 'The High Priestess',
        desc: 'Your identification with the High Priestess suggests you possess inherent good judgment, in the form of strong intuition. She may indicate that reason should take second place to instinct. Your head must trust in the wisdom of your heart for a change. Yet, she is also an aide by nature, and her presence in certain parts of your spread could be indicative of someone close to you coming to your rescue with their own intuition. Intuition is most effective at seeing what is hidden to the senses, so the High Priestess may also come as a warning of concealed facts or influences that are, or will be, important to you.'
    },
    {
        name: 'The Empress',
        desc: 'Traditionally associated with strong maternal influence, the presence of the Empress is excellent news if you are looking for harmony in your marriage or hoping to start a family. Any artistic endeavours you are currently associated with are also likely to be more successful, as this card often finds those exposed to strong bursts of creative or artistic energy. That creative energy may not be in the form of a painting or art project, however: This card also suggests a very strong possibility of pregnancy -- not necessarily yours, but you might be seeing a new addition to your extended family or the family of a close friend in the near future! This card is a good portent for you and those around you.'
    },
    {
        name: 'The Emperor',
        desc: 'Counterpart to the Empress, the Emperor is signifies a powerful influence, generally male in nature. This can also include concepts in your life historically considered masculine, such as leadership and authority, self-discipline, and stability through the power of action. Its positive influences suggest you may be on a path to advancement or promotion, but it can also be neutral. Often a companion to those destined to take on greater responsibility, it may presage change or loss that necessitates you stepping forward to shoulder a greater burden than you have in the past. Whatever the impetus for the change, it indicates you may possess an uncommon inner strength that will compel you act and to lead.'
    },
    {
        name: 'The Hierophant',
        desc: 'Depending on your own nature, the Hierophant can mean very different things. At its root, it represents doctrine, but doctrine can come in the form of teaching and guidance or rigid authority. Where it appears in your spread is also important, as it is most often indicative of your own approach to the moral, religious, and social conventions of the world. Considered wisely, it helps show the path towards fulfillment.'
    },
    {
        name: 'The Lovers',
        desc: 'Your first instinct will most likely be to associate this card as representing love, but, much like love, it does not possess a simple nature. Not only does love comes in many forms, but the Lovers may indicate important or difficult choices ahead in your life. This is bad, in that the choices it portends are generally mutually exclusive, paths to two very different futures, but also good, in that it also confirms that at least one of those paths will take you to a good place. As such, if you happen to find it in your spread, you should consider it carefully, but not fear it. It tells a story of difficult choices, likely painful, but that the correct decision and a positive outcome are within your grasp.'
    },
    {
        name: 'The Chariot',
        desc: 'You have some hard work ahead of you. It may be resolved quickly, but the Chariot is a powerful card, and the labor you are undertaking will probably trend towards long and difficult. You will quite possibly experience rough roads, long uphill slopes, dead ends, and painful setbacks. A good outcome is only assured if the card is upright, but do not let yourself lose hope: This hard road will instil in you a strength of purpose, the ability to overcome through organization and endurance, and the confidence possessed only by those who have done what they thought they could not. Harnessed correctly, few forces can stand against an individual like that.'
    },
    {
        name: 'Strength',
        desc: 'Strength is the rawest form of power, and you possess it in some form. It is a very happy card if you are fighting illness or recovering from injury. As might be suspected, its influence over you, and the use you put it to, can trend towards light or dark. You likely trend towards facing your problems courageously, head-on, and conquering them through perseverance and will. With this ability to overcome life\'s obstacles, though, comes the responsibility to control yourself, and it this card may be a warning to take command of your own actions or emotions before they damage you or the people you care about.'
    }
];
var count = 0;
var backCardImg = 'TarrotImg/back-face.jpg';

function generateCard() {
    for( var i = 0; i < 9; i++) {
        deck1[i].img = 'TarrotImg/MajorArcana/'+ (i+1) + '.png';
    }
    return deck1;
}

function shuffle(array) {
    generateCard()
    console.log(count);
    if (count == 0) {
        array.sort(function () {
            return 0.5 - Math.random()
        });
        count++;
    } else {
        count = 0;
        document.getElementById("wrapper").innerHTML = "";
        dealCard();
    }
}

function dealCard() {
    shuffle(generateCard());
    document.write("<input type=\"button\" value=\"Reshuffle\" onClick=\"window.location.reload()\">");
    document.write("<table class=\"list\">");
    document.write("<tr>");
    for (var i = 0; i < 22; i++) {

        deck[i] = "<td id='card'><div id='" + i + "' onclick='cardClicked(" + i + ")'><img src='" + backCardImg + "' width=\"73px\" height=\"140px\"/>"
            + "<img id='face" + i + "' src='" + deck1[i].img + "' width=\"73px\" height=\"140px\" style=\"display: none;\"/></td>";
        document.write(deck[i]);
        if (i == 12 || i == 25 || i == 38 || i == 51 || i == 64 || i == 77) {
            document.write("</tr>");
            document.write("<tr>");
        } else if (i == 77) {
            document.write("</tr>");
        }
    }
    document.write("</table>");
}

function cardClicked(id) {
    var inputID = "#" + id;
    $(inputID + ' img').toggle();
    selectedCard(id);
}

function selectedCard(id) {
    var faceID = "face" + id;
    var imgSource = document.getElementById(faceID).src
    var selectionCard = document.createElement("img");
    var cardInfo = document.getElementById("cardInfo");
    var info = "<img class='cardShow' src='" + imgSource + "' />";
    info += "<p> " + deck1[id].name + "</p>";
    $('#right').off('click', '.cardShow');
    // Using delegate
    $('#right').on('click', '.cardShow', function() {
        var content = "<p>" + deck1[id].desc + "</p>";
        $(content).dialog({
            modal: true,
            buttons: {
                OK: function() {$(this).dialog("close");}
            }
        });
    })
    cardInfo.innerHTML = info;
}

function addLink(id) {
    console.log(deck1[id].name);

}
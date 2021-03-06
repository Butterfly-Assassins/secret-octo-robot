var $ = require('jQuery'), Backbone = require('backbone');

Backbone.$ = $;

var ratingDisplayTemplate = require('../../templates/rating-display-view.hbs');

var RatingDisplayView = Backbone.View.extend(
    {
        el: '#rating-view-row',
        initialize: function () {
        },
        render: function (data) {
            var found = this.collection.filter(function (item) {
                return(data == item.get('beer').name);
            });

            var rating = parseInt(found[0].attributes.beer.avgRating),
                ratingStr;
            if (rating) {
                if (rating > 1) {
                    rating = rating.toPrecision(2)
                    ratingStr = rating + ' stars';
                } else {
                    rating = rating.toPrecision(2);
                    ratingStr = rating + ' star';
                }
            }
            $(this.el).html(ratingDisplayTemplate({rating: ratingStr}));

            // Display rating
            for (var i = 0; i < rating; i++) {
                $('#stars-area').append('<img class="one-star" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMUAAADFCAYAAADkODbwAAAM4ElEQVR42u1d2W7bSBCUjByGgQ2cBwMBgjzll/JPknjBtmI4eciXWgCXMyZpSqbEa44+qgEiu4mdWJyp6equnu7VChbNXv58+3d4uiub/zf/bX6v/PvjJ94OTIQdnu/Kw8Pn8lCsykNaPdvq2dS/mmdXPUn9Z+bJXv+8/f5N58/S+muT+vuav2tT/15ePfcfy8PvLyXePIzGCW82ZNrZ9Em9yfPOU4x4kg4o9jevf8eY72v+jawG0K7+WcyvxRpggXn2AI//tae63XTZxI1/7jGb+fnuaPO+buqFTwOWpONZKhBjJWHLPEHW2VCZAwD0PdvVu43qBBTngJJ2PlMFdKw07LI3ePr6ulm2HkFwukl3PaB4vB5PoZY8WSdWgReBHXmEkEA43ZQVEHsBugv4czQAbd7D/Q0AotIr5OvXDZAGBkL36fES7c+3jfQzdTyYeco/339ht0gHQ73Y0YAwFhQmrZsR+BlTeA+hscLdm1coiDxmww+kTINTqKGfd/t6mGBHcQZDtenaWKEg9uyGN1dUCjVErVKAg18WiSoYLqRi330OIw7mRH9+gIOHmaCQPBiaDbUfx9FtRoj6Z7Ee7QPAQc47UIsZFlIn0hTqEjie7gCO6GDI1iWpgNQRdWJBoS5kq7AzY1GlzYrXhmlO1IfPkzYNeQp1xhsesiuAI5h3SBhRpQXUiR2F6jsANvAa8A4OqVMLiiqIZf2ZbUHlGuDw4h0SxhujOTnvP5WzPz/3zw6v4RAQ3L1Dz2UiNRSqL9ZAyfoCMOxv+WWWHFOnNwp1JeNgKN5uCWKHawqmz1KnZXcW2FMo0CnQJVfU6ei9FMIeaBpKF75wcyqKolCn2SmUpp9Jt26FAiJ3VxskilKexhkoLuwstOmUkQhdbEfUSbwn7dwZByCMMJUKXujCbUBpr9Hmgt9VrjzOMLUx4gFhe0O5VXNVvDONmSkVHqLww5PFxl6aM1OHdK0DEIWfE89JZ0LF7w8eIjp18rOoat6hdGCoAkThN8UoOgulJfi2aVdNgPB8wgXvZkikUYIYQLStKQtli5j5XUR1h0wuSOBTky0JRJ1UUqiuwMe9JETlwgUKDtVRqE6FwMvzt398PUSuFBQBPIWZi6eOQnHWMNqZbEoBEWqQo1pPzC1Va3u4pooXK+ApppZCcctIibpCGrkqFlkoAYG3andeUyeTgsY7p91LK+yJlStfoAgBoGoKRTm+sDfnEuULE4E6gUJ1hT1iDdfUu/AzM7Hx/sMeSKGyfki/Msidq/cUlGiUagGJUMCHdejWnEXudg633aFOZ2Zio8ZMUTaKfTdsYWUH8BQEaJR6kY5YrtyW6AMYb6LewEhmAML3AkSmTqBQBLw3NAmaiioygZGCbpxGdMuY7QzxDGsS9MAy4hRe+gl1IjaEBIdW4CoDpGDpF6OB2gYEBVwzjxtg9j4L1ikMMOAlegK5x2uSZcvIDgbw6MiB06mIBSiIrBeCN16X5w/7G1Ao394CwVsPdXr4TPoaJLyFxy4reLm8qBPWLYB3x8vl2XfIJAFAoXo8/P2nZWsnfpzU7Bf7kUVrFRxoHipoEWDzpE5Yv8tVCLM7rkCs49+ZziQDsIYO6S9c7xnq5GgmNigUw/QsXiZv6gQK5fhwa+8d53iOHobz10xSAGvpYC0P2bXNsOA5fXgODLEzy7F+xw8zGgyDETtViisgCKZjr2cjq5xtgG2Cs6c7gAMmFxDbCXFFm61IeWZbYLCL+7s67Ns9no3s/3t0b0LqYG+YTkCkq/Ld/h4a7Wziid5ap92K/6hWmG5AbM60/xmiUBeFnmwla+o9TAcYqsP8ohC9WwIKzuNaYToBsVsN134NFQiOvoedrCB+wGgDYuwcd/s1Z6YgWZUvn1aCC68BIwcG0w0/cVQ1O/seNjQNGDfvMBoUS/o6QdOAxQRDV3tw2dBgcak40ypSGHNAJCfag6t5Fk6bne3oNR2GCQXExtHogb5ge3KQPQZ50DRgvsAwpD24uKJqN3Hu4XYTslMw14AYoz24uHvvtXkyNA1Y7OzSnHvb3juKZwjCYQvAMEd7WJqBCtYrtkL6y/PMnjsweIeQE1WD9gZKHTa6hckFw1LtYUnnxyht26FpwC4BwoX2MGuaar0nnadjoWnAONClS2nZtg9OzAmj0DQABh/aw9y0bNsoK3bHNmgaur0DhZ63LSgotVWEpgG6RKHHLLmpp7inoQMMZvYJtbFxZEEBTQPeIXYDbdLzsaFpQHuIMSiSfKt2aBrQHgCKC9de97cAB+gSQPGOTkHTgPbgcX+Vf3/85DfpBnQK2gNAcaFEZOlMZJhuuiQOFNA0oD0gprgchJd/vv/CtoR3cAOKjQBQNCUi0DSgPQAUKCyE9qBN0cY9DdClKLVPUofI454GtIfZoMgEIh50CtoD65t3wTQNjCcDXRp7ySjmHW1oGtAeSIIiRjcPCh8cNgyIzUrHgXkaUzjtOM5JyoeNo0xa9kUdRhznm+EpYH06hCZQNM3Q1J0IUL2nqdVaWIQJIZ6+lsfcEdQJpplCRWuwTCUPDQOFGmzFX1zpyDKAOs2gUF91UKh3Q1t+f5Gflk1RXg4KNZFFiHeToE6gUFMGQaoItjHnez4opDOJ08yTChdZUScjUmJ7LwDGTuGBadyH2GAb1AmgmCPo2nKPDNQJdgYUkmvkLt27EUmhTDrx+Q6ggLcYV96hAhSgTgDFEu1KXFyR40qqU1A8XsujUGMKREWpl+dSbTB4izHxhEi9Al4C6vbQobm/UeYpEE+4B8XDZzkUe+yhaTI1IoBhToFqAbGNUfbh5NAU4SJBnUChBuudJkziFXESgDr5A0W1mdhTqKmCLvtmBkOCDAwUas6hydpFoqwDFGro0JwTb9omWDmoE0wghVqyP1gKNTmyTqBQHpMwLEGBrFM4UHAUepdeS2YZcDOlThwbQLOslXOxP1gFVAyzTpabJ3znabA6NHNH3efNRCA2lZHMsk698x6YeTpWFMrlu2XjLZj0iR0cnphMVFtjfhYuWUrbQHntEBSmCCwTJtvHzNiMoRyM5mmwoFA+3iV5b8GAOs2aBmS+54n2dVoWFCpbewAF9YvrhKmTjct2y9KIlEFPfm6izwQGWW9hF+SK5KaxYMgcfUaidMp0cidLocx7yzzuDbLzCoieol6GJxIdakmWQoU4SEh6C2LUqdUeFA21JEmhsoAHCKmaF9epNh/ag8dTkEondZLVDyEPDvvhqZwKRGZODGoPHqkjmXdAiULF6B9MhkYRoE6jtQef3pIAnSLlKWKUzJCYcJN7yj/HDqYX0IWYmgaZphcxD4jo3iIibVisPfjsnRsxG0dhT5i1iR9YKqNOzrQHgXQquqegkJWLRqPyOJ6CFF0iqGlEpdWU0tT25efhc9AhZ2J71x585uoDB51R2IMB4v6WlqgZPB0X8FQIqj1IeF9J4EOScnf5oCdpgGAymvbgU9PIrsogFCrTlZY//zIq/hqETwYQZqJrD8xLRIJl5jhc4Q3iOj0vKqtgmqimEQQU5tD6/YXH9V3v8YUn6kRWe2CoaXi/f2Ozj2tejR68cXFPgx3Jaw8MNQ2vBwzXLpBeXoqHl6GCLkXQNLyBYsO44Z3NQiR0Ayu22gMTTcPL4EgJfYIP95/cZXFSd4MdRWgPDKiJU28hqSWqCYicbEAHiyVOeyCuaTgDxY7OhSq3qdos7kkhVnsgrGk4GRyZ0G/zE0fDyJblpBFMx9M0FsVtCcGaJjKZnpleQp32QFDTmE1XNQDiiGfm/uMJ+++ALkXXNEwn+MnrrQkQs4BhqNN+Wg4ddImWpjGJQkmOIZypyBOoE7QHmprGaAolMcs0PV07AhgjXTa0B7qaxqjBkRjgefLC0vmDHaE9ENA0RjSku+jBAYgzWaJkOnWyYEIwzSII7z24cua1TL7Ntl7cjj9BEEzz0jRMZ/ij9WI65y+O19h0B/d9Kt+n+G6gPTDVNFqvzmiEGS2Rr+cUUXvvQQidsgde9fsvz4H7vEryGKBLsjQN0CWXaVtoD7w1DQTTnugUsky47go71SO+lqBQzKhTBkCEAUcCOoXeUrDzqVtkoshRpeit8NUDY38LSgWqBOtXSz8AHLHqnpBmZZC+3QEcQVRrxA0AB57aMwAMzMHRBH8Ax7IAGjRJIDhMUzZkq2YNQ6EypxvmCxzP9YWkBN7jYryw6a9QhomnVuuyLR/JIbg1hwV2BuwVIHUAaTdHrggIu/pzcxl+Agtv9vZfQx+keZC84xGgPMNme5BGFORIsxoQJKs2yeB7ViBMmZl+RPae8faNf5OhWw0AGn2mybRp67IHI+BJTO1VsX7biA1Y0g5gckebvtn4p5t/M6+LIgwW3quYtj2GfnUpTPfZnnlOv669l762Vzt9zPyDvdn/thIQYgY57pAAAAAASUVORK5CYII=">');
            }

            // If the rating is less than five, display rating out of five stars
            if (rating < 5) {
                for (var j = 0; j < (5-rating); j++) {
                    $('#stars-area').append('<img class="one-star" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMUAAADFCAYAAADkODbwAAAFX0lEQVR42u3dTU4bQRAGUB8DCbHiSpzLLAEJTsrCkS0RJSIOZnB318/7pFmEVaaoN4U9M927nSzL+/PN2+t+f/j49+vj4+H4s8PL3b3qSIkcG3zL8SeKLYfKS5gr/LWOn6KARdJMgO+iGAEDEgk5CS4FMRoFJBJqGkREAYgsnQiXolgJAxBT4RARRAQUH8fh+fZBt8AAhekBQkQUUWHAAcMyEJFRwAEDFHDkzfFDYRYQl6DIBAMO02EKiGwo4IABCjD8qbQCRWYYcJgOQ0BkRwGG6QAFHKbDDBRgCBCFUcABAxRgADEKBRhAANEEBRiNQUABR9uvW0eiAMN0AKIhCjCagIACDCAGogADCCAao2gFoxMIKMAAYgIKMIAAAoqaMDqCgAKMs4mwNGU1FGCYEkBAUQdGVxBQjD3en27egIDi8/NiL3f3pgUQaY5ZGzl2RpEKRncQM6YEFMlgQLGf+osCIzgMIPanfbChgAKIRVMCisAwOrw5FxUFGEFhwABFiD36Jn3rB0RwEFAEmxanG0gwLEfR/UZeKBggxEBhWgRBAUEcEFAEgQFCLBSnR/RhWAcDgngoTAsogIAiDgwIoIACiDQowFgAA4DYIKCYjAIAKMCAIiUKMCah6LxMTTYQUEyCAQAUUECRGgUYg2Fo/nwgoIACCijmwdD8eVGAAQUQUFy+7ObWFVc0PxSmBRTlUIABBRBQjIOh+aGAAoqyKMCwJbHImKuKKohePzNqlU0qg9iEAgypiuFbPe4DiXQC8WV/+7Qu3UD8GAUYUgnD1VCAIZVAfPmAoJsf0g3Ef3vZXUHpiGEICjgkO4hhKMCQjBiGowBDMoL4Z++O2PDDr0sygfjUsx7Nlc4YpqIAQ7KAmIoCDskAYgkKMCQqhqUoTrfUnzauuSNAzITh/VjpjuGvvvTiuAARCAUcEglEKBRgSKg+tA6PABEYBRxAQAEGDFC4pyGxey78f9DUgAEKMICAAg4goAADhtDH4eXuPu3eBVoOCCjgAAIKMGDwmeJnwp9vH7QlEFCYGjBAAQYQUMABBBRgwAAFGEBAAQcQUIABAxRgAJG6N0asOJ7iVr5AEW0xNJMCCiiggAIKfzqBkfhiaUoIFFAIFFB4vByMb18wTQmBAgqBojeK401K7Q3Gks3lTQkoyvRH9cc9tDUUm/oDCukKo91Ja2coNvcHFKI/mpy4dgYDCiCggAIKKAb2BxTSqUfanbT2hQIKKKAY1R9V7m5rXzCu2h9ACBRQiP6ofeLaFgwogIBixmvJWT9wZ20wKJL0BxRzGwsMKIAoeg7l+wOKNY0EBRQtUHRGXq43gFhbQyigKNU4zq9wb0CxvmYRz/G4kjsUQCyvl2kRqFZQxKkRFIHqBEWc2kRZST3q0w9trwqulGoQYv1gKOLVQh0W1wMKf0rqiaBF0ADqEm5qdjx5j7y4UEKREMSqGvnCYXEhZu6J7Z31HLVqf0cTCPUK/2xYtSLYmsAFMlUxRt+YsQdgnvrtoqdCIbpskTuyjlAsKAgMapluoYdsxegKIjOMXcYA0RsHEAlRQJCzvrvsiVoUzZ8Txq5KIhVFw+etd5QXqsLBACIXDFNiQoGAyIcDiIEFgiEnDCAGFgmInDCAGFgoIPLiAGJAoWDIDaP1t0yjYACRG4bpMAAGDPlxAHFFGEDUgAHEhpxbehGIGjiAuOLUgKEuDN2+AQYQtWD8fp34afI6r5VgAFELh+kQ6Jkph5X7wHAAAYYDCDgcMAgcQAgYMAgcMAgcMAgcMAgcMAgcMAgcMAggIAggMEjfnHv7DwSRohNk9F6B0izH9YhMA5Fkk8RvRNpOFRUel1+OlvpMCeVLvgAAAABJRU5ErkJggg==">');
                }
            }
        }

    }
);

module.exports = RatingDisplayView;

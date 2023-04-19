$(document).ready(function(){

    console.log('Ready')

    //  Fetch the current date and update it in the DOM
    let date = new Date()
    let today_date = date_time.toLocaleDateString()



    //  write an event, when Submit button is clicked
    $('#button').click(function(){

        //  get the text value from the textarea using the 'val()' method
        let text_value = $('#text').val()
        console.log(text_value)

        //  Convert it to JS object.
        jsonify(text_value)
        //  Provide a 'key' here and in write the same in app.py file as well to extract data
        let input_text = {'key' : text_value}
        console.log(input_text)

        //  ajax request
        $.ajax({

            url : '/predict-emotion',

            //  type of web request
            type : 'POST',

            //  Data to be sent in JSON format
            data : JSON.stringify(input_data),

            //  type of response expected is json
            dataType : 'json',

            //  contentType
            contentType : 'application/json',

            //  if everything is successful, run this function
            success : function(result){

                // extract prediction and emoticon url from result
                let prediction = result.prediction
                let emoji = result.url
                console.log(emoji)

                //  update the DOM elements


                //  show them
                $('#sentiment').text(prediction)
                $('#sentiment').show()

                $('#emoji').attr('src' , emoji)
                $('#emoji').show()
            },

            //  if any error, run this function
            error : function(result){

                console.log(result)
            }
        })


        //  clearing the textbox after every button push
        $('#text').val("")
    })
        
})
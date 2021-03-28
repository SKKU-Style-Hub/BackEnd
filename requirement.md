//price Integer로 변환 필요 -> 숫자 사이에 , 없애야 함

//Section1. MainFeed response
[
    {
        "postId" : Integer,
        "contentType" : Integer, //0->Styling, 1->userFeed, 2->advertisement
        "likeNum" : Integer,
        "comments" :[String], 
        "stylingContent" : {
            "requestId" : Integer,
            "requestorId" : Integer,
            "requestorNickname" : String, //Base64
            "requestorImg" : String, //Base64
            "requestClothingImg" : String, //Base64
            "requestContent" : String,
            "stylingResult" : [
                {
                    "stylingId" : Integer,
                    "stylistId" : Integer,
                    "stylistNickname" : String,
                    "stylistImg" : String, //Base64
                    "stylingImg" : String, //Base64
                    "components" : [
                        {
                            "brandName" : String,
                            "price" : Integer,
                            "productLink" : String,
                            "xCoordinate" : Float,
                            "yCoordinate" : Float
                        }
                    ]
                }
            ]
        },
        "userFeedContent" : {
            "writerId": Integer,
            "writerNickname": String,
            "writerImg" : String,//Base64
            "postImg" : [String],//Base64
            "postContent" : String
        }
    }
]

//Section 1. 메인피드 스타일링 컨텐츠에서 "스타일링 참여하기" Request
{
    "userId" : String,
    "requestId" : Integer,
}

//Section 1. 메인피드 스타일링 컨텐츠에서 "스타일링 참여하기" Response
{
    "requestId" : Integer,
    "requestorId" : Integer,
    "requestorNickname" : String, //Base64
    "requestorImg" : String, //Base64
    "requestClothingImg" : String, //Base64
    "requestContent" : String
}

//Section 2. 내 옷장 "행거 추가하기" Request
{
    "userId" : Integer,
    "clothingId": Integer,
    "newClothingImg" : String,//Base64
    "brandName" : String,
    "category" : String, //Omnious Result
}

//Section 3. 코디 요청 Request
{
    "userId" : Integer
}

//Section 3. 코디 요청 Response
[
    {
        "requestId" : Integer,
        "requestYear" : Integer,
        "requestMonth" : Integer,
        "requestDay" : Integer,
        "requestClothingImg" : String,
        "requestContent" : String,
        "resultNum" : Integer,
        "likeNum" : Integer,
    }
]

//Section 3. 코디 요청 List 중 하나 클릭 했을 때 Request
{
    "requestId" : Integer
}

//Section 3. 코디 요청 List 중 하나 클릭 했을 때 Response
[
    {
        "stylingId" : Integer,
        "stylistId" : Integer,
        "stylistNickname" : String,
        "stylistImg" : String, //Base64
        "stylingImg" : String, //Base64
        "components" : [
            {
                "clothingImg" : String,
                "xCoordinate" : Float,
                "yCoordinate" : Float,
                "productName" : String,
                "brandName" : String,
                "price" : Integer,
                "productLink" : String
            }
        ]
    }
]



//Section 3. 코디 요청 "코디 요청하기" -> "요청하기" Request
{
    "userId" : Integer,
    "requestClothingId" : Integer,
    "requestClothingImg" : String,
    "budgetMin" : Integer,
    "budgetMax" : Integer,
    "requestItem" : [String],
    "requestStyle" : [String],
    "requestContent" : String
}

//Section 3. 코디 요청 "코디 요청하기" -> "요청하기" Response
{
    "requestId" : Integer 
}

//Section 4. 피팅룸 -> "보내기" (다른 사람이 요청한 코디를 한 경우) Request
{
    "userId" : Integer,
    "requestorId" : Integer, 
    "components" : [
        {
            "clothingImg" : String,
            "xCoordinate" : Float,
            "yCoordinate" : Float,
            "productId" : String, // 판매되는 제품인 경우 productId
        }
    ]
}

//Section 4. 피팅룸 -> "저장" (내가 피팅룸 들어가서 코디한 경우) Request
{
    "userId" : Integer,
    "stylingImg" : String,
    "components" : [
        {
            "clothingImg" : String,
            "xCoordinate" : Float,
            "yCoordinate" : Float,
            "productId" : String, // 판매되는 제품인 경우 productId
        }
    ]
}

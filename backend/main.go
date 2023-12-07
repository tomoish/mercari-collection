package main

import (
	"context"
	"fmt"
	"net/http"

	"github.com/aws/aws-lambda-go/events"
	"github.com/aws/aws-lambda-go/lambda"
	"github.com/aws/aws-sdk-go/aws"
	"github.com/aws/aws-sdk-go/aws/session"
	"github.com/aws/aws-sdk-go/service/dynamodb"
	"github.com/aws/aws-sdk-go/service/dynamodb/dynamodbattribute"
	ginadapter "github.com/awslabs/aws-lambda-go-api-proxy/gin"
	"github.com/gin-gonic/gin"
)


type UserResponse struct {
	ID           int    `json:"id"`
	Name         string `json:"name"`
	Icon         string `json:"icon"`
	Total_assets []int `json:"total_assets"`
}

type ItemResponse struct {
	ID           int    `json:"id"`
	Name         string `json:"name"`
	UserID       int    `json:"user_id"`
	UserName     string `json:"user_name"`
	Image        string `json:"image"`
	Status       string `json:"status"`
	Category     string `json:"category"`
	DesiredPrice int    `json:"desired_price"`
}

type UpdateRequest struct {
	Status string `json:"status"`
}

var ginLambda *ginadapter.GinLambda

func init() {
    router := gin.Default()
    router.GET("/ping", getPong)
	router.GET("/user/:uid", getUser)
	router.GET("/items/user/:uid", getUserItems)
	router.GET("/items/:iid", getItem)
	router.PUT("/items/change/price/:iid", changeItemPrice)
	router.PUT("/items/change/status/:iid", changeItemStatus)
	// router.PUT("/items/change/user/:iid", changeItemUser)

    // router.Run()

	ginLambda = ginadapter.New(router)
}

func Handler(ctx context.Context, req events.APIGatewayProxyRequest) (events.APIGatewayProxyResponse, error) {
	return ginLambda.ProxyWithContext(ctx, req)
}

func main() {
	lambda.Start(Handler)
}

func getPong(c *gin.Context) {
	fmt.Printf("1")
	c.IndentedJSON(http.StatusOK, gin.H{
            "message": "pong",
        })
}

func getUser(c *gin.Context) {
	user_id := c.Param("uid")
	sess, _ := session.NewSession()
	db := dynamodb.New(sess)

	tableName := "UsersData"

	params := &dynamodb.GetItemInput{
		TableName: aws.String(tableName),
		Key: map[string]*dynamodb.AttributeValue{
			"id": {
				N: aws.String(user_id),
			},
		},
	}

	res, err := db.GetItem(params)
	if err != nil {
		fmt.Println("Cannot get value from DynamoDB", err)
	}

	user := &UserResponse{}
    if err := dynamodbattribute.UnmarshalMap(res.Item, user); err != nil {
        fmt.Println("[Unmarshal Error]", err)
        return
    }

	c.IndentedJSON(http.StatusOK, user)
}

func getItem(c *gin.Context) {
	item_id := c.Param("iid")
	sess, _ := session.NewSession()
	db := dynamodb.New(sess)

	tableName := "ItemsData"

	params := &dynamodb.GetItemInput{
		TableName: aws.String(tableName),
		Key: map[string]*dynamodb.AttributeValue{
			"id": {
				N: aws.String(item_id),
			},
		},
	}

	res, err := db.GetItem(params)
	if err != nil {
		fmt.Println("Cannot get value from DynamoDB", err)
	}

	item := &ItemResponse{}
    if err := dynamodbattribute.UnmarshalMap(res.Item, item); err != nil {
        fmt.Println("[Unmarshal Error]", err)
        return
    }

	c.IndentedJSON(http.StatusOK, item)

}

func getUserItems(c *gin.Context) {
	user_id := c.Param("uid")
	sess, _ := session.NewSession()
	db := dynamodb.New(sess)

	tableName := "ItemsData"

	params := &dynamodb.QueryInput{
		TableName: aws.String(tableName),
		ExpressionAttributeNames: map[string]*string{
            "#UID":   aws.String("user_id"),
        },
		ExpressionAttributeValues: map[string]*dynamodb.AttributeValue{
            ":uid": {
                N: aws.String(user_id),
            },
        },
        KeyConditionExpression: aws.String("#UID= :uid"),
		IndexName:              aws.String("user_id"),
	}

	res, err := db.Query(params)
	if err != nil {
		fmt.Println("Cannot get value from DynamoDB", err)
	}

	items := make([]*ItemResponse, 0)
	if err := dynamodbattribute.UnmarshalListOfMaps(res.Items, &items); err != nil {
        fmt.Println("[Unmarshal Error]", err)
        return
    }

	c.IndentedJSON(http.StatusOK, items)

}

func changeItemPrice(c *gin.Context) {

}

func changeItemStatus(c *gin.Context) {
	item_id := c.Param("iid")
	// status := c.Query("status")
	var updateRequest UpdateRequest
	if err := c.ShouldBindJSON(&updateRequest); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	sess, _ := session.NewSession()
	db := dynamodb.New(sess)

	tableName := "ItemsData"

	input := &dynamodb.UpdateItemInput{
		TableName: aws.String(tableName),
		Key: map[string]*dynamodb.AttributeValue{
			"id": {
				N: aws.String(item_id),
			},
		},
		ExpressionAttributeNames: map[string]*string{
            "#Status":   aws.String("status"),
        },
		ExpressionAttributeValues: map[string]*dynamodb.AttributeValue{
            ":status": {
                S: aws.String(updateRequest.Status),
            },
        },
		UpdateExpression: aws.String("SET #Status = :status"),
		ReturnValues: aws.String("ALL_NEW"),
	}

	res, err := db.UpdateItem(input)
	if err != nil {
		fmt.Println("Cannot get value from DynamoDB", err)
	}

	item := &ItemResponse{}
    if err := dynamodbattribute.UnmarshalMap(res.Attributes, item); err != nil {
        fmt.Println("[Unmarshal Error]", err)
        return
    }

	c.IndentedJSON(http.StatusOK, item)

}

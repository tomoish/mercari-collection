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
	ginadapter "github.com/awslabs/aws-lambda-go-api-proxy/gin"
	"github.com/gin-gonic/gin"
)


type User struct {
	id int
	name string
	icon string
	total_assets []int
}

type Item struct {
	id int
	user_id int
	name string
	image string
	status string
	category string
	desired_price int
}

var ginLambda *ginadapter.GinLambda

func init() {
    router := gin.Default()
    router.GET("/ping", getPong)
	router.GET("/user/:uid", getUser)
	router.GET("/items/user/:uid", getUserItems)
	router.GET("/items/:iid", getItem)
	router.POST("/items/change/price/:iid", changeItemPrice)
	router.POST("/items/change/status/:iid", changeItemStatus)

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
	item := res.Item

	fmt.Print(item)

	var listData []interface{}
	for _, asset := range item["total_assets"].L {
		listData = append(listData, *asset.N)
	}

	c.IndentedJSON(http.StatusOK, gin.H{"id":*item["id"].N, "icon":*item["icon"].S, "name":*item["name"].S, "total_assets":listData})

}

func getItem(c *gin.Context) {

}

func getUserItems(c *gin.Context) {

}

func changeItemPrice(c *gin.Context) {

}

func changeItemStatus(c *gin.Context) {

}

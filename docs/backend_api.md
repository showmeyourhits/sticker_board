## Entities

```javascript
Board: {
	id: string,
	subboards: SubBoard[],
	stickers: Sticker[],
}
```
```javascript
SubBoard: {
	id: string,
	title: string,
	color: string,
}
```
```javascript
Sticker: {
	id: string,
	boardID: string,
	subBoardID: string,
	text: string,
	color: string,
}
```

## API

Every entity has same CRUD api, nothing fancy

### Board
```
METHOD: POST
URL: /api/board
Request: Board
Response: Board // updated with real IDs
```
```
METHOD: GET
URL: /api/board/:boardID
Response: Board
```
```
METHOD: DELETE
URL: /api/board/:boardID
```

### SubBoard
```
METHOD: POST
URL: /api/subboard/:boardID
Request: SubBoard
Response: SubBoard // updated with real ID
```
```
METHOD: PATCH
URL: /api/subboard/:boardID/:subBoardID
Request: SubBoard
```
```
METHOD: DELETE // deletion of subboard should delete all stickers
URL: /api/subboard/:boardID/:subBoardID
```

### Sticker
```
METHOD: POST
URL: /api/sticker
Request: Sticker
Response: SubBoard // updated with real ID
```
```
METHOD: PATCH
URL: /api/sticker/:stickerID
Request: Sticker
```
```
METHOD: DELETE // deletion of subboard should delete all stickers
URL: /api/sticker/:stickerID
```

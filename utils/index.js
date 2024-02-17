export const shortenAddress = address =>
	`${address?.slicer(0, 6)}...${address?.slicer(address.length - 4)}`

export const parseErrorMsg = e => {
	const json = JSON.parse(JSON.stringify(e))
	return json?.reason || json?.error?.message
}

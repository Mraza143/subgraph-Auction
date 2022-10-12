import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  AuctionInitialized,
  BidMade,
  ReceiveWinningBidAfterAuction,
  WinNftAfterAuction,
  WithdrawNftAfterAuctionUnsuccesful
} from "../generated/Auction/Auction"

export function createAuctionInitializedEvent(
  nftAdress: Address,
  tokenId: BigInt,
  nftSellerAdress: Address,
  minprice: BigInt,
  interval: BigInt
): AuctionInitialized {
  let auctionInitializedEvent = changetype<AuctionInitialized>(newMockEvent())

  auctionInitializedEvent.parameters = new Array()

  auctionInitializedEvent.parameters.push(
    new ethereum.EventParam("nftAdress", ethereum.Value.fromAddress(nftAdress))
  )
  auctionInitializedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  auctionInitializedEvent.parameters.push(
    new ethereum.EventParam(
      "nftSellerAdress",
      ethereum.Value.fromAddress(nftSellerAdress)
    )
  )
  auctionInitializedEvent.parameters.push(
    new ethereum.EventParam(
      "minprice",
      ethereum.Value.fromUnsignedBigInt(minprice)
    )
  )
  auctionInitializedEvent.parameters.push(
    new ethereum.EventParam(
      "interval",
      ethereum.Value.fromUnsignedBigInt(interval)
    )
  )

  return auctionInitializedEvent
}

export function createBidMadeEvent(
  nftAdress: Address,
  tokenId: BigInt,
  bidMakerAddress: Address,
  price: BigInt
): BidMade {
  let bidMadeEvent = changetype<BidMade>(newMockEvent())

  bidMadeEvent.parameters = new Array()

  bidMadeEvent.parameters.push(
    new ethereum.EventParam("nftAdress", ethereum.Value.fromAddress(nftAdress))
  )
  bidMadeEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  bidMadeEvent.parameters.push(
    new ethereum.EventParam(
      "bidMakerAddress",
      ethereum.Value.fromAddress(bidMakerAddress)
    )
  )
  bidMadeEvent.parameters.push(
    new ethereum.EventParam("price", ethereum.Value.fromUnsignedBigInt(price))
  )

  return bidMadeEvent
}

export function createReceiveWinningBidAfterAuctionEvent(
  nftAdress: Address,
  tokenId: BigInt,
  nftsellerAddress: Address,
  winningBid: BigInt
): ReceiveWinningBidAfterAuction {
  let receiveWinningBidAfterAuctionEvent = changetype<
    ReceiveWinningBidAfterAuction
  >(newMockEvent())

  receiveWinningBidAfterAuctionEvent.parameters = new Array()

  receiveWinningBidAfterAuctionEvent.parameters.push(
    new ethereum.EventParam("nftAdress", ethereum.Value.fromAddress(nftAdress))
  )
  receiveWinningBidAfterAuctionEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  receiveWinningBidAfterAuctionEvent.parameters.push(
    new ethereum.EventParam(
      "nftsellerAddress",
      ethereum.Value.fromAddress(nftsellerAddress)
    )
  )
  receiveWinningBidAfterAuctionEvent.parameters.push(
    new ethereum.EventParam(
      "winningBid",
      ethereum.Value.fromUnsignedBigInt(winningBid)
    )
  )

  return receiveWinningBidAfterAuctionEvent
}

export function createWinNftAfterAuctionEvent(
  nftAdress: Address,
  tokenId: BigInt,
  nftWinnerAddress: Address,
  finalPrice: BigInt
): WinNftAfterAuction {
  let winNftAfterAuctionEvent = changetype<WinNftAfterAuction>(newMockEvent())

  winNftAfterAuctionEvent.parameters = new Array()

  winNftAfterAuctionEvent.parameters.push(
    new ethereum.EventParam("nftAdress", ethereum.Value.fromAddress(nftAdress))
  )
  winNftAfterAuctionEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  winNftAfterAuctionEvent.parameters.push(
    new ethereum.EventParam(
      "nftWinnerAddress",
      ethereum.Value.fromAddress(nftWinnerAddress)
    )
  )
  winNftAfterAuctionEvent.parameters.push(
    new ethereum.EventParam(
      "finalPrice",
      ethereum.Value.fromUnsignedBigInt(finalPrice)
    )
  )

  return winNftAfterAuctionEvent
}

export function createWithdrawNftAfterAuctionUnsuccesfulEvent(
  nftAdress: Address,
  tokenId: BigInt,
  nftsellerAddress: Address
): WithdrawNftAfterAuctionUnsuccesful {
  let withdrawNftAfterAuctionUnsuccesfulEvent = changetype<
    WithdrawNftAfterAuctionUnsuccesful
  >(newMockEvent())

  withdrawNftAfterAuctionUnsuccesfulEvent.parameters = new Array()

  withdrawNftAfterAuctionUnsuccesfulEvent.parameters.push(
    new ethereum.EventParam("nftAdress", ethereum.Value.fromAddress(nftAdress))
  )
  withdrawNftAfterAuctionUnsuccesfulEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  withdrawNftAfterAuctionUnsuccesfulEvent.parameters.push(
    new ethereum.EventParam(
      "nftsellerAddress",
      ethereum.Value.fromAddress(nftsellerAddress)
    )
  )

  return withdrawNftAfterAuctionUnsuccesfulEvent
}

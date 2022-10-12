import { BigInt, Address } from "@graphprotocol/graph-ts"

import {
  AuctionInitialized as AuctionInitializedEvent,
  BidMade as BidMadeEvent,
  ReceiveWinningBidAfterAuction as ReceiveWinningBidAfterAuctionEvent,
  WinNftAfterAuction as WinNftAfterAuctionEvent,
  WithdrawNftAfterAuctionUnsuccesful as WithdrawNftAfterAuctionUnsuccesfulEvent
} from "../generated/Auction/Auction"
import {
        Auction,
        Bid
      } from "../generated/schema"

export function handleAuctionInitialized(event: AuctionInitializedEvent): void {
  let auction= Auction.load(getIdFromEventParams(event.params.tokenId,event.params.nftAdress))

  if(!auction){
    auction = new Auction(
      getIdFromEventParams(event.params.tokenId,event.params.nftAdress)
    )
  }
  auction.nftSeller = event.params.nftSellerAdress;
  auction.nftAddress = event.params.nftAdress;
  auction.tokenId = event.params.tokenId;
  auction.price = event.params.minprice;
  auction.interval = event.params.interval;
  auction.currentPrice=event.params.minprice;
  auction.active = true;
  auction.save()
}

export function handleBidMade(event: BidMadeEvent): void {
  let bid= Bid.load(getIdFromEventParams(event.params.tokenId,event.params.nftAdress))
  let auction = Auction.load(getIdFromEventParams(event.params.tokenId,event.params.nftAdress))

  if(!bid){
    bid = new Bid(
      getIdFromEventParams(event.params.tokenId,event.params.nftAdress)
    )
  }



  bid.nftAddress = event.params.nftAdress;
  bid.tokenId = event.params.tokenId;
  bid.bidMaker = event.params.bidMakerAddress;
  bid.price = event.params.price;

  auction!.currentPrice=event.params.price;
  bid.save()
  auction!.save()


}

export function handleReceiveWinningBidAfterAuction(
  event: ReceiveWinningBidAfterAuctionEvent
): void {
  let auction = Auction.load(getIdFromEventParams(event.params.tokenId,event.params.nftAdress))

  auction!.active=false
  auction!.save()
}

export function handleWinNftAfterAuction(event: WinNftAfterAuctionEvent): void {
  let auction = Auction.load(getIdFromEventParams(event.params.tokenId,event.params.nftAdress))

  auction!.active=false
  auction!.save()
}

export function handleWithdrawNftAfterAuctionUnsuccesful(
  event: WithdrawNftAfterAuctionUnsuccesfulEvent
): void {
  let auction = Auction.load(getIdFromEventParams(event.params.tokenId,event.params.nftAdress))

  auction!.active=false
  auction!.save()
}

function getIdFromEventParams(tokenId: BigInt, nftAddress: Address): string {
  return tokenId.toHexString() + nftAddress.toHexString()
}




/*
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  ////let entity = ExampleEntity.load(event.transaction.from.toHex())

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  ////if (!entity) {
  ////  entity = new ExampleEntity(event.transaction.from.toHex())

    // Entity fields can be set using simple assignments
    entity.count = BigInt.fromI32(0)
  }

  // BigInt and BigDecimal math are supported
  entity.count = entity.count + BigInt.fromI32(1)

  // Entity fields can be set based on event parameters
  entity.nftAdress = event.params.nftAdress
  entity.tokenId = event.params.tokenId

  // Entities can be written to the store with `.save()`
  entity.save()

  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.getAmountFundedByAnAddress(...)
  // - contract.getBeginningPriceOfTheNft(...)
  // - contract.getBidOfAnAddress(...)
  // - contract.getCurrentWinner(...)
  // - contract.getIntervalOfNftAuction(...)
  // - contract.getSellerOfTheNft(...)
  // - contract.getSpecificAddress(...)
  // - contract.getStartingTimeOfAuction(...)
  // - contract.getStateOfAuction(...)
  // - contract.getTemporaryHighestBid(...)
  // - contract.nftContractAuctions(...)
  
  # We will br creating this entity after a succesful call to  receiveNft
# We will also set the active bool of related nft auction to false
type ReceiveNft @entity {
    id: ID!
    nftAddress: Bytes! # address
    tokenId: BigInt!
    finalprice: BigInt!
    winnerAddress: Bytes!
}


# We will br creating this entity after a succesful call to  withdrawNft
# We will also set the active bool of related nft auction to false

type WithdrawNftAfterUnsuccessfulAuction @entity {
    id: ID!
    nftAddress: Bytes! # address
    tokenId: BigInt!
    nftSeller: Bytes!
}


# We will br creating this entity after a succesful call to  withdrawWinningBid
# We will also set the active bool of related nft auction to false
type WithdrawWinningBid @entity {
    id: ID!
    nftAddress: Bytes! # address
    tokenId: BigInt!
    winningBid: BigInt!
    nftSeller: Bytes!
}
  
  
  
  */

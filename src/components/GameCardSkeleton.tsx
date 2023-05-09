import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react"

interface Props {
  isLoading: boolean;
}

const GameCardSkeleton = ({isLoading}: Props) => {
  return (
    <Card width="300px" borderRadius={10} overflow="hidden">
      <Skeleton height="200px" isLoaded={!isLoading}  />
      <CardBody>
        <SkeletonText  />
      </CardBody>
    </Card>
  )
}

export default GameCardSkeleton
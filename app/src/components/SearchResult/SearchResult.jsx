import { styled } from "styled-components";
import { BASE_URL, Button, Container } from "../../App";

const SearchResult = ({data}) => {
  return (
    <FoodCardContainer>
       <Container>
        <FoodCards>
            {
                data?.map(({name, image, text, price}) => (
                <FoodCard key={name} >
                    <div className="food_name">
                        <img src={BASE_URL + image} />
                    </div>
                    <div className="food_info">
                        <h2>{name}</h2>
                        <p>{text}</p>
                    </div>
                    <Button>${price.toFixed(2)}</Button>
                </FoodCard>
                ))
            }
        </FoodCards>
       </Container>
    </FoodCardContainer>
  )
}

export default SearchResult;

const FoodCardContainer = styled.section`
    background-image: url(./bg.png);
    min-height: calc(100vh - 210px);
    background-size: cover;
`;

const FoodCards = styled.div`
    display: flex;
    flex-wrap: wrap;
    row-gap: 32px;
    column-gap: 20px;
    justify-content: center;
    align-items: center;
    padding-top: 80px;
`;

const FoodCard = styled.div`
    border: 0.66px solid;
    border-image-source: radial-gradient(
            80.69% 208.78% at 108.28% 112.58%,
            #eabfff 0%,
            rgba(135, 38, 183, 0) 100%
        ),
        radial-gradient(
            80.38% 222.5% at -13.75% -12.36%,
            #98f9ff 0%,
            rgba(255, 255, 255, 0) 100%
        );
    border-radius: 20px;
    background: url(.png), radial-gradient(151.92% 127.02% at 15.32% 21.04%, rgba(165, 239, 255, 0.20) 0%, rgba(110, 191, 244, 0.04) 77.08%, rgba(70, 144, 212, 0.00) 100%);
    background-blend-mode: overlay, normal;
    backdrop-filter: blur(13.1842px);
     width: 340px;
    height: 167px;

    display: flex;
    padding: 8px;

    .food_info{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: end;
        h3{
            margin-top: 8px;
            font-size: 16px;
            font-weight: 500;
        }

        p{
            margin-top: 4px;
            font-size: 12px;
        }
    }
`;
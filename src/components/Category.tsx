import React from "react";
import styled from "styled-components";

const Header = styled.header`
  --border-size: 4px;

  position: relative;
  width: 100%;
  height: 4rem;

  &::after {
    position: absolute;
    left: 0;
    bottom: 0;

    content: "";

    width: 100%;
    height: var(--border-size);

    background-color: #393939;
    border-radius: 2em;
  }
`;

const CategoryBtn = styled.button<{ active?: boolean }>`
  --border-size: 8px;

  position: relative;
  width: 100%;
  height: 100%;

  padding: 0.5rem 1rem;

  &::after {
    position: absolute;
    left: 0;
    bottom: 0;

    content: "";

    width: 100%;
    height: var(--border-size);

    transform: translateY(2px);

    background-color: red;
    z-index: 10;
    opacity: ${({ active }) => (active ? "1" : "0")};
  }

  &:hover::after {
    opacity: 1;
  }
`;

type Props = {};

const Category = (props: Props) => {
  return (
    <div className="pl-[50px]">
      <div className="flex flex-col gap-4 p-4">
        <Header>
          <ul className="w-full h-full flex gap-4">
            <li>
              <CategoryBtn>Action</CategoryBtn>
            </li>
            <li>
              <CategoryBtn active={true}>Adventure</CategoryBtn>
            </li>
          </ul>
        </Header>

        <div>
          <div>
            <div>
              <img
                src="https://images2.alphacoders.com/100/thumb-1920-1000886.jpg"
                alt="umbrella academy"
              />
            </div>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque sit
              ad omnis obcaecati, quam facere totam cumque mollitia quidem, illo
              eos ab. Temporibus, ab rem modi quaerat ut ipsam facere.
            </p>

            <a href="/">More information</a>
          </div>

          <div>
            <div>
              <img
                src="https://images2.alphacoders.com/100/thumb-1920-1000886.jpg"
                alt="umbrella academy"
              />
            </div>
          </div>

          <div>
            <div>
              <img
                src="https://images2.alphacoders.com/100/thumb-1920-1000886.jpg"
                alt="umbrella academy"
              />
            </div>
          </div>

          <div>
            <div>
              <img
                src="https://images2.alphacoders.com/100/thumb-1920-1000886.jpg"
                alt="umbrella academy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;

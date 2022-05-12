// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

/**
 * @title History
 * @dev matching system for users and companies
 */
contract History {

    address payable user;
    address payable company;
    /**
    * @dev Each user's personal particulars + browsing history
    */
    struct User {
        string username;
        string gender;
        string occupation;
        uint birthyear;
        uint keywords[];
        uint searches_len;
        address payable current_user;
    }
    /**
    * @dev Company name and their minimum required search queries from a user
    */
    struct CompanyNeeds{
        string company;
        uint min_search_len;
        uint offer;
        address payable company;
    }

    mapping(uint => User) public Queries;
    mapping(uint => CompanyNeeds) public  Need;


    modifier foundMatch(uint _index) {
        require(Queries[_index].searches_len >= Need[_index].min_search_len, "Found a match.");
        _;
    }

    /**
     * match company needs with browsing history of certain length
     * reward user with the company's offer
     */
    function match(uint256 _index) public foundMatch(uint _index) {
        require(msg.sender != address(0));

        address payable _User = Queries[_index].current_user;
        uint _reward = Need[_index].offer;
        _User.transfer(_reward);
    }

}
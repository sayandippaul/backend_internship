# Voting System API - README

## Introduction

This document describes the implementation of a voting system where each voter can distribute a total of **10 votes** among all candidates, with certain rules and constraints to ensure fairness and reduce the risk of manipulation by bad actors. The system also incorporates mechanisms to handle **ties** and **strategic voting** by leveraging voter uniqueness and score adjustments.

## Voting Rules

### Key Voting Constraints:
1. **Total Votes per Voter:** 
   - Each voter is given **10 votes** to distribute among the candidates.

2. **Maximum Votes for a Single Candidate:** 
   - A voter can give **a maximum of 7 votes** to any **one candidate**.
   - This prevents a voter from giving all their votes to a single candidate, thus reducing the impact of voting blocks or strategic manipulation.

3. **Votes for "NOTA" (None of the Above):**
   - If a voter does not want to vote for any candidate, they can give **3 votes** to **NOTA**.
   - When a voter gives votes to NOTA, any votes they give to other candidates will be **adjusted** to reduce their impact. Specifically, if a voter gives 7 votes to a candidate along with 3 votes to NOTA, the 7 votes will be **multiplied by 0.8**, resulting in **6 effective votes** for that candidate.
   - This adjustment discourages strategic voters from gaming the system by reducing the effect of their vote when NOTA is used.

4. **Handling Tied Scores:**
   - In case of a tie between two or more candidates based on the total vote count, we will use the number of **unique voters** as the tie-breaking mechanism.
   - The candidate with more **unique voters** will be considered the winner, ensuring that broader support across the voter base is recognized.

### Voting Flow Summary:
- Voters are allowed to distribute their votes across candidates with the rules above.
- If votes are tied between candidates, the system checks which candidate has more unique voters to break the tie.

## Example Voting Scenarios

1. **Voter 1:**
   - 7 votes to Candidate A
   - 3 votes to Candidate B
   - Total votes: 7 + 3 = 10 votes

2. **Voter 2 (using NOTA):**
   - 7 votes to Candidate A
   - 3 votes to NOTA
   - The votes to Candidate A will be reduced to **6 votes** (7 votes * 0.8 = 6).

3. **Voter 3:**
   - 5 votes to Candidate B
   - 5 votes to Candidate C
   - Total votes: 5 + 5 = 10 votes

4. **Voter 4:**
   - 6 votes to Candidate C
   - 4 votes to Candidate D
   - Total votes: 6 + 4 = 10 votes

In this system, **NOTA** impacts the final vote tally by adjusting the votes given to other candidates, ensuring that any voter who partially opts out (by selecting NOTA) has a reduced influence on the overall outcome.

## Tiebreaker Example:
Let’s assume two candidates, Candidate A and Candidate B, end up with the same number of votes. To decide the winner, we count how many **unique voters** voted for each candidate:
- If Candidate A had votes from 50 unique voters and Candidate B had votes from 45 unique voters, **Candidate A** would win because they received votes from more unique voters.
  
This ensures that the candidate with wider overall support is declared the winner.

## Features and Advantages of the System

1. **Prevents Vote Manipulation:**
   - By limiting the maximum number of votes a voter can give to a single candidate, the system discourages vote-stacking or strategic voting that could give an unfair advantage to any candidate.
   
2. **Incorporates "None of the Above" (NOTA):**
   - Allows voters to express dissatisfaction with all candidates by selecting NOTA, while ensuring their other votes are reduced in impact to prevent strategic abuse of NOTA.

3. **Fairness in Tie-Breaking:**
   - The use of **unique voter counts** as a tiebreaker ensures that candidates with broader, more diverse support win, even when vote totals are tied.

## API Endpoints

Here are the backend API endpoints that support this voting system:

1. **Create a New Voting Room**
   - **POST /voting-room**
   - Description: Creates a new voting room for an election.

2. **Add a New Candidate**
   - **POST /voting-room/{id}/add-candidate**
   - Description: Adds a candidate to the voting room.

3. **Add a New Voter**
   - **POST /voting-room/{id}/add-voter**
   - Description: Registers a new voter to participate in the election.

4. **Cast Votes**
   - **POST /voting-room/{id}/cast-vote**
   - Description: Allows a voter to cast their 10 votes according to the defined rules (maximum 7 votes for a single candidate, NOTA rules, etc.).

5. **Check Results**
   - **GET /voting-room/{id}/results**
   - Description: Returns the results of the election, including total votes for each candidate and NOTA, along with the number of unique voters for each candidate (to handle tiebreakers).

Thank You Live Link: https://sayandippaul.github.io/backend_internship/

def bulbs(self, A):
        # take a boolean for checking on or off
        # toggle boolean for every off switch (check from boolean)
        # count each switch click
        toggle = 0
        count = 0
        for i in A:
            if i == toggle:
                count += 1
                toggle = not toggle
        return count
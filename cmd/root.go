package cmd

import (
	"fmt"
	"os"

	"github.com/spf13/cobra"
	"github.com/spf13/viper"
)


var rootCmd = &cobra.Command{
	Use:   "microservice",
	Short: "Microservice demo application",
	Run: func(cmd *cobra.Command, args []string) {
			cmd.Usage()
	},
}
func Execute() {
	if err := rootCmd.Execute(); err != nil {
			fmt.Println(err)
			os.Exit(1)
	}
}